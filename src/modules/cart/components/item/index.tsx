"use client"

import { Text, clx } from "@medusajs/ui"
import { updateLineItem } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"

import ErrorMessage from "@modules/checkout/components/error-message"
import DeleteButton from "@modules/common/components/delete-button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import LineItemUnitPrice from "@modules/common/components/line-item-unit-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Spinner from "@modules/common/icons/spinner"
import Thumbnail from "@modules/products/components/thumbnail"
import { useState } from "react"

type ItemProps = {
  item: HttpTypes.StoreCartLineItem
  type?: "full" | "preview"
  currencyCode: string
}

const Item = ({ item, type = "full", currencyCode }: ItemProps) => {
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const changeQuantity = async (quantity: number) => {
    setError(null)
    setUpdating(true)

    await updateLineItem({
      lineId: item.id,
      quantity,
    })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setUpdating(false)
      })
  }

  // TODO: Update this to grab the actual max inventory
  const maxQtyFromInventory = 10
  const maxQuantity = item.variant?.manage_inventory ? 10 : maxQtyFromInventory

  return (
    <tr className="w-full border-b border-[#E8DDD4] transition-colors" data-testid="product-row">
      <td className="py-6 pl-0 pr-4 align-middle">
        <div className="flex items-center gap-x-6">
          <LocalizedClientLink
            href={`/products/${item.product_handle}`}
            className={clx("flex rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(44,24,16,0.06)] border border-[#E8DDD4] shrink-0", {
              "w-16 h-16": type === "preview",
              "small:w-24 w-16 small:h-24 h-16": type === "full",
            })}
          >
            <Thumbnail
              thumbnail={item.thumbnail}
              images={item.variant?.product?.images}
              size="square"
            />
          </LocalizedClientLink>

          <div className="flex flex-col text-left">
            <Text
              className="text-base font-bold text-[#2C1810] mb-1 leading-tight"
              data-testid="product-title"
            >
              {item.product_title}
            </Text>
            <LineItemOptions variant={item.variant} data-testid="product-variant" />
          </div>
        </div>
      </td>

      {type === "full" && (
        <td className="py-6 px-4 align-middle">
          <div className="flex gap-4 items-center">
            <div className="flex items-center rounded-full bg-white border border-[#E8DDD4] shadow-[0_2px_8px_rgba(44,24,16,0.04)] p-1">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full text-[#8D6E63] hover:bg-[#FAF7F2] hover:text-[#C9762B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => changeQuantity(item.quantity - 1)}
                disabled={item.quantity <= 1 || updating}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 6H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="w-8 text-center text-sm font-bold text-[#2C1810]">
                {item.quantity}
              </span>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full text-[#8D6E63] hover:bg-[#FAF7F2] hover:text-[#C9762B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => changeQuantity(item.quantity + 1)}
                disabled={item.quantity >= maxQuantity || updating}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2.5V9.5M2.5 6H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="text-[#8D6E63] hover:text-[#C9762B] transition-colors">
              <DeleteButton id={item.id} data-testid="product-delete-button" />
            </div>
            {updating && <Spinner />}
          </div>
          <ErrorMessage error={error} data-testid="product-error-message" />
        </td>
      )}

      {type === "full" && (
        <td className="hidden small:table-cell py-6 px-4 align-middle">
          <div className="font-semibold text-sm text-[#8D6E63]">
            <LineItemUnitPrice
              item={item}
              style="tight"
              currencyCode={currencyCode}
            />
          </div>
        </td>
      )}

      <td className="py-6 pl-4 pr-0 text-right align-middle">
        <span
          className={clx("!pr-0", {
            "flex flex-col items-end h-full justify-center": type === "preview",
          })}
        >
          {type === "preview" && (
            <span className="flex gap-x-1 ">
              <Text className="text-[#8D6E63] font-medium">{item.quantity}x </Text>
              <LineItemUnitPrice
                item={item}
                style="tight"
                currencyCode={currencyCode}
              />
            </span>
          )}
          <div className="font-bold text-base text-[#2C1810] text-right">
            <LineItemPrice
              item={item}
              style="tight"
              currencyCode={currencyCode}
            />
          </div>
        </span>
      </td>
    </tr>
  )
}

export default Item
