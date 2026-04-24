import type { SVGProps } from "react";

/**
 * BrandMark — the "O" target-eye extracted from the ZeroFat wordmark,
 * rebuilt as a crisp vector so it scales to any size and theme.
 */
export function BrandMark({
  accent = "#3b82f6",
  accentDeep = "#1e4fb0",
  ink = "#0a1f3d",
  ...props
}: SVGProps<SVGSVGElement> & {
  accent?: string;
  accentDeep?: string;
  ink?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient id="zf-mark-grad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor={accentDeep} />
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle cx="20" cy="20" r="18" fill="url(#zf-mark-grad)" />
      {/* Vertical bisector — the subtle "fold" on the original O */}
      <line
        x1="20"
        y1="2"
        x2="20"
        y2="38"
        stroke={ink}
        strokeOpacity="0.12"
        strokeWidth="0.75"
      />
      {/* Inner white cap */}
      <circle cx="20" cy="20" r="9" fill="#ffffff" />
      {/* Core dot */}
      <circle cx="20" cy="20" r="3.6" fill={ink} />
    </svg>
  );
}

/**
 * BrandLockup — mark + wordmark, the canonical horizontal logo lockup.
 */
export function BrandLockup({
  tone = "ink",
  className,
  markClassName,
  wordmarkClassName,
}: {
  tone?: "ink" | "light";
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  const text = tone === "ink" ? "text-[color:var(--color-ink)]" : "text-white";
  return (
    <span className={`inline-flex items-center gap-2.5 ${text} ${className ?? ""}`}>
      <BrandMark className={`size-7 ${markClassName ?? ""}`} />
      <span
        className={`font-display text-[1.15rem] tracking-tight leading-none ${wordmarkClassName ?? ""}`}
      >
        ZeroFat
      </span>
    </span>
  );
}
