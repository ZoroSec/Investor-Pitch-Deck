"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `value` when scrolled into view. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(display).toLocaleString()}
      {suffix}
    </span>
  );
}
