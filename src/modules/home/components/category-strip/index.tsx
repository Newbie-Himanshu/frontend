/**
 * ============================================================
 * VRIDHIRA — E-Commerce for Indian Artisans
 * ============================================================
 * @author      Himanshu
 * @github      https://github.com/Newbie-Himanshu
 * @copyright   2026 Himanshu. All rights reserved.
 * @license     SEE LICENSE IN LICENSE
 * @modifiedWith    Antigravity
 * @modifiedOn      2026-03-06
 * @changeNote      Artisan category cards with scroll-in animation — 4-col grid
 * ============================================================
 */

"use client"

import { useEffect, useRef, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

// ─── Category data ────────────────────────────────────────────────────────────
// Update href handles once categories are created in Medusa backend
const categories = [
  {
    emoji: "🧵",
    title: "Textiles & Weaves",
    description: "Handlooms, sarees, dupattas",
    href: "/categories/textiles",
  },
  {
    emoji: "🏺",
    title: "Pottery & Ceramics",
    description: "Blue pottery, terracotta, stoneware",
    href: "/categories/pottery",
  },
  {
    emoji: "💎",
    title: "Handmade Jewellery",
    description: "Tribal, Kundan, oxidized silver",
    href: "/categories/jewellery",
  },
  {
    emoji: "🪵",
    title: "Woodcraft",
    description: "Carved furniture, toys, home décor",
    href: "/categories/woodcraft",
  },
  {
    emoji: "🎨",
    title: "Paintings & Art",
    description: "Madhubani, Warli, Pattachitra",
    href: "/categories/paintings",
  },
  {
    emoji: "👜",
    title: "Leather Goods",
    description: "Bags, wallets, footwear",
    href: "/categories/leather",
  },
  {
    emoji: "🪔",
    title: "Metal & Brass",
    description: "Dhokra, bidriware, brassware",
    href: "/categories/metal",
  },
  {
    emoji: "🌿",
    title: "Bamboo & Cane",
    description: "Baskets, furniture, eco-goods",
    href: "/categories/bamboo",
  },
]

// ─── Category Strip ───────────────────────────────────────────────────────────
export default function CategoryStrip() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section
      className="py-20"
      style={{ background: "#F5EFE7" }}
      aria-label="Shop by category"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs tracking-[0.3em] uppercase block mb-3"
            style={{ color: "#C9762B" }}
          >
            Explore the Craft
          </span>
          <h2
            className="font-serif text-4xl md:text-5xl"
            style={{ color: "#2C1810" }}
          >
            Shop by Category
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6"
        >
          {categories.map((cat, index) => (
            <LocalizedClientLink
              key={cat.title}
              href={cat.href}
              className="group block"
            >
              <div
                className="rounded-2xl p-6 lg:p-8 text-center transition-all duration-700 ease-out cursor-pointer"
                style={{
                  background: "#FFFDF9",
                  border: "1px solid #E8DDD4",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 80}ms`,
                  boxShadow: "0 1px 4px rgba(139, 69, 19, 0.06)",
                }}
              >
                {/* Emoji icon */}
                <span
                  className="text-4xl mb-4 block transition-transform duration-300 group-hover:scale-110"
                  role="img"
                  aria-hidden="true"
                >
                  {cat.emoji}
                </span>

                <h3
                  className="font-serif text-lg mb-1 leading-tight"
                  style={{ color: "#2C1810" }}
                >
                  {cat.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8D6E63" }}>
                  {cat.description}
                </p>

                {/* Subtle hover underline */}
                <span
                  className="mt-3 inline-block text-xs tracking-wide transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ color: "#8B4513" }}
                >
                  Browse →
                </span>
              </div>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}
