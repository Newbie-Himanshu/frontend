/**
 * ============================================================
 * VRIDHIRA — E-Commerce for Indian Artisans
 * ============================================================
 * @author      Himanshu
 * @github      https://github.com/Newbie-Himanshu
 * @repo        https://github.com/Newbie-Himanshu/vridhira-frontend
 * @copyright   2026 Himanshu. All rights reserved.
 * @license     SEE LICENSE IN LICENSE
 * ------------------------------------------------------------
 * @lastModifiedBy  Himanshu
 * @modifiedWith    Antigravity
 * @modifiedOn      2026-03-06
 * @changeNote      Replaced Medusa placeholder with full-screen Vridhira branded hero — earthy gradient, serif headline, CTA, scroll indicator
 * ============================================================
 */

import LocalizedClientLink from "@modules/common/components/localized-client-link"

// ─── Arrow Right SVG (inline, no external dep) ───────────────────────────────
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

// ─── Hero Component ───────────────────────────────────────────────────────────

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Vridhira — Homepage hero"
      style={{
        background: "linear-gradient(135deg, #FAF7F2 0%, #F5EFE7 40%, #EDE0D0 70%, #E8D4BC 100%)",
      }}
    >
      {/* ── Decorative circles (earthy depth) ── */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C9762B 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #8B4513 0%, transparent 70%)",
        }}
      />

      {/* ── Big decorative serif text (background) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-end pr-4 lg:pr-16 pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-serif font-bold leading-none"
          style={{
            fontSize: "clamp(120px, 18vw, 300px)",
            color: "rgba(139, 69, 19, 0.06)",
            whiteSpace: "nowrap",
          }}
        >
          Artisan
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full pt-24 lg:pt-20">
        <div className="content-container">
          <div className="max-w-2xl">
            {/* Eyebrow label */}
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-vridhira-accent mb-6">
              🇮🇳 &nbsp;India's Artisan Marketplace
            </span>

            {/* Main headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-vridhira-text mb-6">
              <span className="block">Handcrafted</span>
              <span className="block text-vridhira-primary">
                with soul.
              </span>
              <span className="block">Delivered to</span>
              <span className="block">your door.</span>
            </h1>

            {/* Sub-tagline */}
            <p className="text-base sm:text-lg text-vridhira-muted leading-relaxed max-w-md mb-10">
              Discover authentic handmade goods directly from India's artisans and
              craftspeople. Every purchase supports a maker.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 group"
                style={{
                  background: "#8B4513",
                  color: "#FAF7F2",
                }}
                data-testid="hero-shop-button"
              >
                Shop Now
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </LocalizedClientLink>

              <LocalizedClientLink
                href="/collections"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide border-2 border-vridhira-primary text-vridhira-primary bg-transparent hover:bg-vridhira-primary hover:text-white transition-all duration-200"
              >
                Browse Collections
              </LocalizedClientLink>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10">
              {[
                "✦ Free shipping above ₹999",
                "✦ Razorpay & UPI accepted",
                "✦ 100% authentic handcrafted",
              ].map((item) => (
                <span key={item} className="text-xs text-vridhira-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-vridhira-muted">
        <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">
          Scroll
        </span>
        <div className="w-px h-12 bg-vridhira-border relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-vridhira-primary animate-pulse"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
