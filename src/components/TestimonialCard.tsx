"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import type { TESTIMONIALS } from "@/lib/constants";

interface TestimonialCardProps {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.5,
        delay: index * 0.09,
        ease: "easeOut",
      }}
      className="bg-white rounded-2xl p-7 border-l-4 border-gold shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col gap-4"
    >
      {/* Header: avatar + name + branch */}
      <div className="flex items-center gap-3">
        {/* Avatar initial */}
        <div className="w-11 h-11 rounded-full bg-blush flex items-center justify-center shrink-0">
          <span className="font-heading text-lg text-white font-semibold leading-none">
            {testimonial.name.charAt(0)}
          </span>
        </div>

        <div>
          <p className="font-heading text-base text-heritage font-semibold leading-tight">
            {testimonial.name}
          </p>
          <p className="font-ui text-xs text-text-muted mt-0.5">
            {testimonial.branch}
          </p>
        </div>
      </div>

      {/* Star rating */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < testimonial.rating
                ? "text-gold fill-gold"
                : "text-gold/30"
            }
          />
        ))}
      </div>

      {/* Bilingual quote */}
      <div className="flex flex-col gap-2">
        <p className="font-cn-body text-sm text-heritage leading-relaxed">
          &ldquo;{testimonial.quoteCN}&rdquo;
        </p>
        <p className="font-sans text-sm text-text-muted leading-relaxed italic">
          &ldquo;{testimonial.quoteEN}&rdquo;
        </p>
      </div>
    </motion.div>
  );
}
