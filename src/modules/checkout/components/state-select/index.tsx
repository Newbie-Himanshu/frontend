"use client"

import { ChevronUpDown, CheckMini } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import { useEffect, useRef, useState } from "react"

const INDIA_STATES = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
]

type StateSelectProps = {
  name: string
  value?: string
  onChange?: (e: any) => void
  required?: boolean
  autoComplete?: string
  "data-testid"?: string
}

const StateSelect = ({
  name,
  value,
  onChange,
  required,
  autoComplete,
  "data-testid": dataTestId,
}: StateSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(value || "")
  const containerRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Sync external value changes
  useEffect(() => {
    if (value !== undefined) setSelected(value)
  }, [value])

  const handleSelect = (state: string) => {
    setSelected(state)
    setIsOpen(false)
    // Simulate a native change event for form compatibility
    if (onChange) {
      onChange({ target: { name, value: state } } as any)
    }
  }

  const hasValue = selected !== ""

  return (
    <div ref={containerRef} className="relative w-full" data-testid={dataTestId}>
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected} autoComplete={autoComplete} />

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clx(
          "w-full h-14 px-4 pt-4 pb-1 text-left bg-white border rounded-xl transition-all flex items-center appearance-none",
          {
            "border-[#C9762B] ring-1 ring-[#C9762B]": isOpen,
            "border-[#E8DDD4] hover:border-[#C9762B]/60": !isOpen,
          }
        )}
      >
        <span className={clx("flex-1 text-sm truncate", {
          "text-[#2C1810]": hasValue,
          "text-transparent": !hasValue,
        })}>
          {selected || "placeholder"}
        </span>
        <ChevronUpDown className={clx("text-[#8D6E63] flex-shrink-0 transition-transform duration-200", {
          "rotate-180": isOpen,
        })} />
      </button>

      {/* Floating label */}
      <label
        onClick={() => setIsOpen(!isOpen)}
        className={clx(
          "absolute left-4 transition-all duration-200 pointer-events-auto cursor-pointer select-none",
          {
            "top-1.5 text-xs text-[#8D6E63]": hasValue || isOpen,
            "top-4 text-sm text-[#8D6E63]": !hasValue && !isOpen,
          }
        )}
      >
        State / Province
        {required && <span className="text-[#C9762B] ml-1">*</span>}
      </label>

      {/* Dropdown panel — exactly 5 items visible, scrollable */}
      {isOpen && (
        <div
          className="absolute z-50 w-full mt-1 rounded-xl shadow-xl overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.97)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(232, 221, 212, 0.9)",
            boxShadow: "0 16px 48px rgba(139, 69, 19, 0.14)",
          }}
        >
          <div className="overflow-y-auto" style={{ maxHeight: "calc(5 * 44px)" }}>
            {INDIA_STATES.map((state) => (
              <button
                key={state}
                type="button"
                onClick={() => handleSelect(state)}
                className={clx(
                  "w-full text-left px-4 py-2.5 text-sm flex items-center justify-between gap-2 transition-colors duration-150",
                  {
                    "bg-[#FAF7F2] text-[#C9762B] font-semibold": selected === state,
                    "text-[#2C1810] hover:bg-[#FAF7F2] hover:text-[#C9762B]": selected !== state,
                  }
                )}
              >
                <span>{state}</span>
                {selected === state && <CheckMini className="flex-shrink-0 text-[#C9762B]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default StateSelect
