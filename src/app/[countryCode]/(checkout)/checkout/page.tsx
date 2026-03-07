import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import PaymentWrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Checkout",
}

export default async function Checkout() {
  const cart = await retrieveCart()

  if (!cart) {
    return notFound()
  }

  const customer = await retrieveCustomer()

  return (
    <div className="relative w-full min-h-screen">
      {/* Decorative Blob */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.15] mix-blend-multiply z-0"
        style={{ background: "radial-gradient(circle, #C9762B 0%, transparent 70%)", transform: "translate(20%, -20%)" }}
      />

      <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] items-start content-container gap-x-12 lg:gap-x-40 py-12 relative z-10 w-full">
        {/* LEFT — normal flow */}
        <div className="flex flex-col gap-y-8">
          <PaymentWrapper cart={cart}>
            <CheckoutForm cart={cart} customer={customer} />
          </PaymentWrapper>
        </div>

        {/* RIGHT — pinned summary, inside flex/grid cell */}
        <div className="hidden small:block">
          <CheckoutSummary cart={cart} />
        </div>
      </div>
    </div>
  )
}
