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
 * @changeNote      Migrated to Vridhira brand identity — warm surface, giant serif watermark, 4-column grid, fixed GitHub link
 * ============================================================
 */

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import VridhiraCredits from "@modules/layout/components/vridhira-credits"

export default async function Footer() {
  return (
    <footer
      className="w-full"
      style={{ background: "#FAF7F2" }}
    >
      <div className="content-container py-3">

        {/* ── One unified rounded box ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid #C4B5A5",
            boxShadow: "0 4px 24px rgba(44, 24, 16, 0.07)",
          }}
        >

          {/* 3 columns flush inside the box — borders only between cols */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ borderBottom: "1px solid #C4B5A5" }}
          >

            {/* Col 1 — Customer Services */}
            <div className="px-8 py-5" style={{ borderRight: "1px solid #C4B5A5" }}>
              <h3 className="font-dm text-[13px] font-bold tracking-[0.05em] uppercase text-vridhira-text mb-4">
                Customer Services
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {[
                  { label: "FAQs",        href: "/" },
                  { label: "Track Order", href: "/account/orders" },
                  { label: "Returns",     href: "/" },
                  { label: "Delivery",    href: "/" },
                  { label: "Payment",     href: "/" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <LocalizedClientLink
                      href={href}
                      className="font-dm text-sm font-normal text-vridhira-muted hover:text-vridhira-primary transition-colors duration-200"
                    >
                      {label}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 — About */}
            <div className="px-8 py-5" style={{ borderRight: "1px solid #C4B5A5" }}>
              <h3 className="font-dm text-[13px] font-bold tracking-[0.05em] uppercase text-vridhira-text mb-4">
                About
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {[
                  { label: "About us",           href: "/" },
                  { label: "Blog",               href: "/" },
                  { label: "Privacy Policy",     href: "/" },
                  { label: "Terms & Conditions", href: "/" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <LocalizedClientLink
                      href={href}
                      className="font-dm text-sm font-normal text-vridhira-muted hover:text-vridhira-primary transition-colors duration-200"
                    >
                      {label}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Connect */}
            <div className="px-8 py-5">
              <h3 className="font-dm text-[13px] font-bold tracking-[0.05em] uppercase text-vridhira-text mb-4">
                Connect
              </h3>
              <ul className="flex flex-col gap-[12px]">
                {[
                  { label: "Facebook",  href: "https://facebook.com"  },
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "LinkedIn",  href: "https://linkedin.com"  },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-dm text-sm font-normal text-vridhira-muted hover:text-vridhira-primary transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Full-width copyright strip inside the box ── */}
          <div className="py-4 text-center">
            <VridhiraCredits variant="minimal" />
          </div>

        </div>
      </div>
    </footer>
  )
}
