"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ChineseDecorDivider() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div className="flex items-center justify-center py-6">
      <svg
        ref={ref}
        viewBox="0 0 400 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-md h-10"
        aria-hidden="true"
      >
        {/* Left wave line */}
        <motion.path
          d="M 20 20 Q 60 8, 100 20 Q 140 32, 170 20"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Central lotus motif - simplified petals */}
        <motion.path
          d="M 190 20 C 190 12, 196 6, 200 4 C 204 6, 210 12, 210 20 C 210 12, 216 8, 220 10 C 218 14, 214 18, 210 20 C 214 18, 218 14, 220 10"
          stroke="#C9A96E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
        <motion.path
          d="M 180 10 C 182 14, 186 18, 190 20 C 186 18, 182 14, 180 10 C 184 8, 190 12, 190 20 C 190 12, 196 6, 200 4"
          stroke="#C9A96E"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />

        {/* Small dot at center base */}
        <motion.circle
          cx="200"
          cy="24"
          r="1.5"
          fill="#C9A96E"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
        />

        {/* Right wave line */}
        <motion.path
          d="M 230 20 Q 260 8, 300 20 Q 340 32, 380 20"
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        />
      </svg>
    </div>
  );
}
