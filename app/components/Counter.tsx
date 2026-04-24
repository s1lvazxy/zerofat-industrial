"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({
  to,
  duration = 2,
  suffix,
}: {
  to: number;
  duration?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring]);

  return (
    <span
      ref={ref}
      className="relative inline-block tabular-nums"
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      <span aria-hidden className="invisible">
        {to}
        {suffix}
      </span>
      <span className="absolute inset-0">
        {display}
        {suffix}
      </span>
    </span>
  );
}
