"use client"

import { checkPincodeServiceability } from "@lib/data/shipping"
import { useState } from "react"

type Courier = {
  name: string
  rate: number
  estimated_days: number
  cod_available: boolean
}

type ServiceabilityResult = {
  serviceable: boolean
  pincode: string
  couriers: Courier[]
  message: string
}

const PincodeChecker = () => {
  const [pincode, setPincode] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ServiceabilityResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [authRequired, setAuthRequired] = useState(false)

  const handleCheck = async () => {
    const cleaned = pincode.replace(/\D/g, "").slice(0, 6)
    if (cleaned.length !== 6) {
      setError("Please enter a valid 6-digit pincode.")
      return
    }

    setLoading(true)
    setResult(null)
    setError(null)
    setAuthRequired(false)

    try {
      const data = await checkPincodeServiceability(cleaned)

      if (data.message === "AUTH_REQUIRED") {
        setAuthRequired(true)
        return
      }

      if (!data.success) {
        setError(data.message || "Could not check delivery at this pincode.")
        return
      }

      setResult(data)
    } catch (err: any) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-6">
      <p className="text-sm text-gray-500 mb-3">
        Enter your pincode to check if we deliver to your area.
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="e.g. 110001"
          value={pincode}
          onChange={(e) => {
            const val = e.target.value.replace(/\D/g, "").slice(0, 6)
            setPincode(val)
            setResult(null)
            setError(null)
            setAuthRequired(false)
          }}
          onKeyDown={(e) => e.key === "Enter" && handleCheck()}
          className="flex-1 border border-[#EDE4DA] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#564154] transition-colors bg-[#FFFDF9] placeholder:text-gray-400"
        />
        <button
          onClick={handleCheck}
          disabled={loading || pincode.length !== 6}
          className="px-4 py-2 rounded-lg text-sm font-medium bg-[#564154] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6b5167] transition-colors whitespace-nowrap"
        >
          {loading ? "Checking…" : "Check"}
        </button>
      </div>

      {authRequired && (
        <p className="mt-3 text-sm text-[#8B4513]">
          Please{" "}
          <a href="/in/account" className="underline font-medium">
            sign in
          </a>{" "}
          to check delivery at your pincode.
        </p>
      )}

      {error && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}

      {result && (
        <div className="mt-3">
          {result.serviceable ? (
            <div className="rounded-lg border border-[#EDE4DA] bg-[#FFFDF9] p-4">
              <p className="text-sm font-semibold text-[#564154] mb-2">
                ✓ Delivery available to {result.pincode}
              </p>
              {result.couriers.length > 0 && (
                <div className="flex flex-col gap-y-2">
                  {result.couriers.slice(0, 3).map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs text-gray-600"
                    >
                      <span>{c.name}</span>
                      <span className="flex items-center gap-x-2">
                        <span>{c.estimated_days} day{c.estimated_days !== 1 ? "s" : ""}</span>
                        {c.cod_available && (
                          <span className="bg-green-100 text-green-700 rounded px-1 py-0.5">
                            COD
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm text-red-600">
                ✗ {result.message || "Sorry, we don't deliver to this pincode yet."}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PincodeChecker
