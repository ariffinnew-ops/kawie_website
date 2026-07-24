"use client"

import { CATEGORIES, CATEGORY_COLORS, shortCategory } from "@/lib/apps-data"

interface CategoryFilterTabsProps {
  active: string
  onChange: (category: string) => void
  className?: string
}

export function CategoryFilterTabs({ active, onChange, className = "" }: CategoryFilterTabsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {["All", ...CATEGORIES].map((cat) => {
        const color = cat === "All" ? "var(--c-accent)" : CATEGORY_COLORS[cat]
        const isActive = cat === active
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`inline-flex items-center gap-[7px] rounded-full border px-3.5 py-[7px] font-body text-[12.5px] transition-all duration-150 ${
              isActive
                ? "border-transparent font-bold text-[#08131A]"
                : "border-[var(--c-line-strong)] text-[var(--c-muted)] hover:text-[var(--c-ink)]"
            }`}
            style={isActive ? { background: color } : undefined}
          >
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: isActive ? "#08131A" : color }} />
            {shortCategory(cat)}
          </button>
        )
      })}
    </div>
  )
}
