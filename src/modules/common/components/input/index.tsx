import { Label } from "@medusajs/ui"
import React, { useEffect, useImperativeHandle, useState } from "react"

import Eye from "@modules/common/icons/eye"
import EyeOff from "@modules/common/icons/eye-off"

type InputProps = Omit<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  "placeholder"
> & {
  label: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
  topLabel?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, touched, required, topLabel, value, defaultValue, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)
    const [isFocused, setIsFocused] = useState(false)
    
    // Label should float if focused OR if there's a value
    const hasValue = Boolean(value || defaultValue || (inputRef.current?.value))
    const isFloating = isFocused || hasValue

    useEffect(() => {
      if (type === "password" && showPassword) {
        setInputType("text")
      }

      if (type === "password" && !showPassword) {
        setInputType("password")
      }
    }, [type, showPassword])

    useImperativeHandle(ref, () => inputRef.current!)

    return (
      <div className="flex flex-col w-full">
        {topLabel && (
          <label className="mb-2 text-xs font-semibold text-[#8D6E63] uppercase tracking-wider">{topLabel}</label>
        )}
        <div className="flex relative w-full">
          <input
            type={inputType}
            name={name}
            placeholder=" "
            required={required}
            value={value}
            defaultValue={defaultValue}
            className="peer pt-5 pb-1 block w-full h-14 px-4 mt-0 bg-white border border-[#E8DDD4] rounded-xl appearance-none focus:outline-none focus:border-[#C9762B] focus:ring-1 focus:ring-[#C9762B] transition-all text-[#2C1810] text-sm"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
            ref={inputRef}
          />
          <label
            htmlFor={name}
            onClick={() => inputRef.current?.focus()}
            className="absolute left-4 transition-all duration-200 pointer-events-auto cursor-text select-none
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#8D6E63]
              peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#8D6E63]
              top-1.5 text-xs text-[#8D6E63]"
          >
            {label}
            {required && <span className="text-[#C9762B] ml-0.5">*</span>}
          </label>
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-[#8D6E63] hover:text-[#C9762B] px-4 focus:outline-none transition-colors duration-150 absolute right-0 top-4"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </div>
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input
