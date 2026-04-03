"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

export function TestimonialCarousel() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = TESTIMONIALS.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  const testimonial = TESTIMONIALS[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Card */}
      <div className="relative overflow-hidden min-h-[360px] md:min-h-[320px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" as const }}
            className="bg-white rounded-2xl p-8 md:p-10 border border-gold/15 shadow-lg text-center"
          >
            {/* Quote mark */}
            <div className="text-gold text-5xl font-heading leading-none mb-4">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < testimonial.rating
                      ? "text-gold fill-gold"
                      : "text-gold/30"
                  }
                />
              ))}
            </div>

            {/* CN Quote */}
            <p className="font-cn-heading text-lg md:text-xl text-heritage leading-relaxed mb-4 px-2">
              {t(
                `\u201C${testimonial.quoteCN}\u201D`,
                `\u201C${testimonial.quoteEN}\u201D`
              )}
            </p>

            {/* EN Quote */}
            <p className="font-heading text-sm italic text-text-muted leading-relaxed mb-8 px-4">
              {t(
                `\u201C${testimonial.quoteEN}\u201D`,
                `\u201C${testimonial.quoteCN}\u201D`
              )}
            </p>

            {/* Avatar */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center">
                <span className="font-heading text-xl text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-heading text-base text-heritage font-semibold">
                  {testimonial.name}
                </p>
                <p className="font-ui text-xs text-blush">
                  {t(`到访 · ${testimonial.branch}`, `Visited · ${testimonial.branch}`)}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left / Right arrows */}
      <button
        onClick={() => go(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-14 w-10 h-10 rounded-full bg-white/80 border border-gold/20 flex items-center justify-center text-heritage hover:bg-blush-light hover:text-rose-deep transition-colors shadow-md"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-14 w-10 h-10 rounded-full bg-white/80 border border-gold/20 flex items-center justify-center text-heritage hover:bg-blush-light hover:text-rose-deep transition-colors shadow-md"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots + counter */}
      <div className="flex flex-col items-center gap-2 mt-8">
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-blush"
                  : "w-2.5 h-2.5 bg-gold/30 hover:bg-gold/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <p className="font-ui text-xs text-text-muted">
          {current + 1} / {total}
        </p>
      </div>
    </div>
  );
}
