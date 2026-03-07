import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="relative overflow-x-hidden" style={{ background: "#FAF7F2", minHeight: "100vh", paddingTop: 100, paddingBottom: 80 }}>
      {/* ── Decorative Blob ── */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 mix-blend-multiply" 
        style={{ background: "radial-gradient(circle, #C9762B 0%, transparent 70%)", transform: "translate(20%, -20%)" }} 
      />

      <div className="content-container relative z-10 max-w-7xl mx-auto px-6 lg:px-8" data-testid="cart-container">
        {cart?.items?.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">
            {/* ── Left Column: Items ── */}
            <div className="flex flex-col gap-6">
              {!customer && (
                <div 
                  className="rounded-3xl p-6"
                  style={{ 
                    background: "rgba(255, 255, 255, 0.6)", 
                    backdropFilter: "blur(20px)", 
                    border: "1px solid rgba(232, 221, 212, 0.8)",
                    boxShadow: "0 4px 20px rgba(139, 69, 19, 0.05)"
                  }}
                >
                  <SignInPrompt />
                </div>
              )}
              
              <div 
                className="rounded-3xl p-6 lg:p-10"
                style={{ 
                  background: "rgba(255, 255, 255, 0.6)", 
                  backdropFilter: "blur(20px)", 
                  border: "1px solid rgba(232, 221, 212, 0.8)",
                  boxShadow: "0 8px 32px rgba(139, 69, 19, 0.06)"
                }}
              >
                <ItemsTemplate cart={cart} />
              </div>
            </div>

            {/* ── Right Column: Summary ── */}
            <div className="relative">
              <div className="sticky top-28 flex flex-col gap-y-6">
                {cart && cart.region && (
                  <div 
                    className="rounded-3xl p-8"
                    style={{ 
                      background: "rgba(255, 255, 255, 0.6)", 
                      backdropFilter: "blur(20px)", 
                      border: "1px solid rgba(232, 221, 212, 0.8)",
                      boxShadow: "0 12px 40px rgba(139, 69, 19, 0.08)"
                    }}
                  >
                    <Summary cart={cart as any} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div 
            className="rounded-3xl p-12 lg:p-20 text-center mx-auto max-w-2xl mt-10"
            style={{ 
              background: "rgba(255, 255, 255, 0.6)", 
              backdropFilter: "blur(20px)", 
              border: "1px solid rgba(232, 221, 212, 0.8)",
              boxShadow: "0 12px 40px rgba(139, 69, 19, 0.05)"
            }}
          >
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate
