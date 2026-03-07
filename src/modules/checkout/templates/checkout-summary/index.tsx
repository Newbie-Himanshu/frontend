import { Heading } from "@medusajs/ui"

import ItemsPreviewTemplate from "@modules/cart/templates/preview"
import DiscountCode from "@modules/checkout/components/discount-code"
import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"

const CheckoutSummary = ({ cart }: { cart: any }) => {
  return (
    <div className="sticky top-24 self-start flex flex-col gap-y-6 w-full">
      <div 
        className="w-full flex flex-col rounded-3xl p-8 lg:p-10 text-[#2C1810]"
        style={{ 
          background: "rgba(255, 255, 255, 0.6)", 
          backdropFilter: "blur(20px)", 
          border: "1px solid rgba(232, 221, 212, 0.8)",
          boxShadow: "0 12px 40px rgba(139, 69, 19, 0.08)"
        }}
      >
        <Heading
          level="h2"
          className="font-serif text-2xl font-semibold text-[#2C1810] mb-5"
        >
          In your Cart
        </Heading>
        <Divider className="mb-5 border-[#E8DDD4]" />
        <CartTotals totals={cart} />
        <div className="mt-4">
          <ItemsPreviewTemplate cart={cart} />
        </div>
        <div className="mt-6">
          <DiscountCode cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary
