import { ChevronUpDown } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import {
  SelectHTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

export type NativeSelectProps = {
  placeholder?: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
} & SelectHTMLAttributes<HTMLSelectElement>

const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    { placeholder = "Select...", defaultValue, className, children, ...props },
    ref
  ) => {
    const innerRef = useRef<HTMLSelectElement>(null)
    const [isPlaceholder, setIsPlaceholder] = useState(false)

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    )

    useEffect(() => {
      if (innerRef.current && innerRef.current.value === "") {
        setIsPlaceholder(true)
      } else {
        setIsPlaceholder(false)
      }
    }, [innerRef.current?.value])

    return (
      <div className="flex flex-col w-full">
        <div className="flex relative z-0 w-full">
          <select
            ref={innerRef}
            {...props}
            className={clx(
              "pt-4 pb-1 block w-full h-14 px-4 mt-0 bg-white border border-[#E8DDD4] rounded-xl appearance-none focus:outline-none focus:border-[#C9762B] focus:ring-1 focus:ring-[#C9762B] transition-all text-[#2C1810] z-10",
              className,
              {
                "text-transparent": isPlaceholder, // hide text if placeholder so custom label shows
              }
            )}
            onFocus={() => innerRef.current?.focus()}
            onBlur={() => innerRef.current?.blur()}
          >
            <option value="" disabled hidden></option>
            {children}
          </select>
          <label
            className={clx(
              "flex items-center justify-center mx-3 px-1 transition-all absolute duration-300 pointer-events-none z-20",
              {
                "top-4 text-[#8D6E63]": isPlaceholder,
                "top-1.5 text-xs text-[#8D6E63]": !isPlaceholder,
              }
            )}
          >
            {placeholder}
            {props.required && <span className="text-[#C9762B] ml-1">*</span>}
          </label>
          <span className="absolute right-4 inset-y-0 flex items-center pointer-events-none text-[#8D6E63] z-20">
            <ChevronUpDown />
          </span>
        </div>
      </div>
    )
  }
)

NativeSelect.displayName = "NativeSelect"

export default NativeSelect
