"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

type SummaryProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "address"
  } else if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  } else {
    return "payment"
  }
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <div className="flex flex-col gap-y-4">
      <Heading level="h2" className="font-serif text-3xl font-semibold text-[#2C1810]" style={{ paddingBottom: "16px", borderBottom: "1px solid #E8DDD4", marginBottom: "8px" }}>
        Summary
      </Heading>
      <DiscountCode cart={cart} />
      <Divider />
      <CartTotals totals={cart} />
      <LocalizedClientLink
        href={"/checkout?step=" + step}
        data-testid="checkout-button"
      >
        <Button 
          className="w-full h-12 rounded-[12px] text-base font-bold tracking-[0.05em] uppercase mt-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{ 
            background: "#C9762B", 
            color: "#FFF", 
            border: "none",
            boxShadow: "0 4px 16px rgba(201, 118, 43, 0.35)"
          }}
        >
          Proceed to Checkout
        </Button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary
