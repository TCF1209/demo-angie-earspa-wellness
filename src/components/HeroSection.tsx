"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { BRAND, WHATSAPP_NUMBER } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const LotusSVG = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 md:w-20 md:h-20"
  >
    <path
      d="M40 10 C40 10 28 28 28 42 C28 52 33 58 40 60 C47 58 52 52 52 42 C52 28 40 10 40 10Z"
      fill="#F2A49E"
      opacity="0.5"
    />
    <path
      d="M40 18 C40 18 20 32 16 46 C14 54 18 60 26 60 C32 60 36 56 40 52"
      stroke="#F2A49E"
      strokeWidth="1.5"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M40 18 C40 18 60 32 64 46 C66 54 62 60 54 60 C48 60 44 56 40 52"
      stroke="#F2A49E"
      strokeWidth="1.5"
      fill="none"
      opacity="0.4"
    />
    <path
      d="M40 24 C40 24 14 36 10 48 C8 54 12 62 22 62 C30 62 36 56 40 50"
      stroke="#D4756D"
      strokeWidth="1"
      fill="none"
      opacity="0.3"
    />
    <path
      d="M40 24 C40 24 66 36 70 48 C72 54 68 62 58 62 C50 62 44 56 40 50"
      stroke="#D4756D"
      strokeWidth="1"
      fill="none"
      opacity="0.3"
    />
  </svg>
);

export function HeroSection() {
  const whatsappLink = buildWhatsAppLink(
    WHATSAPP_NUMBER,
    `您好！我想预约服务。\nHi! I'd like to make a booking.`
  );

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background image with Ken Burns effect */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          src="/images/gallery-3.webp"
          alt={BRAND.nameEN}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Blush gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-cream/90 via-cream/70 to-blush-light/40" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-heritage/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-8 lg:gap-0">
            {/* Left text content */}
            <div className="flex flex-col gap-5 md:gap-6 pt-20 lg:pt-0">
              {/* Gold label */}
              <motion.p
                {...fadeUp(0)}
                className="font-ui text-sm md:text-base tracking-[0.2em] text-gold uppercase"
              >
                传统养生 · 现代护理
              </motion.p>

              {/* CN Headline */}
              <motion.h1
                {...fadeUp(0.15)}
                className="font-display font-cn-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heritage leading-tight"
              >
                {BRAND.taglineCN}
              </motion.h1>

              {/* EN Subheadline */}
              <motion.p
                {...fadeUp(0.28)}
                className="font-display text-xl md:text-2xl lg:text-3xl text-blush italic"
              >
                {BRAND.taglineEN}
              </motion.p>

              {/* Body */}
              <motion.p
                {...fadeUp(0.38)}
                className="font-cn-body text-base md:text-lg text-text-muted tracking-wide"
              >
                专业采耳 · 头疗养生 · 子宫护理 · 高端美容
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-rose-deep text-white font-ui text-base md:text-lg px-7 py-3.5 rounded-full border-2 border-gold hover:brightness-110 transition-all duration-300 w-full sm:w-auto"
                >
                  <span>📲</span> 立即预约 WhatsApp
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-1 bg-transparent text-heritage font-ui text-base md:text-lg px-7 py-3.5 rounded-full border-2 border-heritage/30 hover:border-heritage/60 transition-all duration-300 w-full sm:w-auto"
                >
                  探索服务 <span className="ml-1">→</span>
                </Link>
              </motion.div>
            </div>

            {/* Right side - decorative elements (desktop) */}
            <div className="hidden lg:flex items-center justify-center relative">
              {/* Floating lotus */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="opacity-60"
              >
                <LotusSVG />
              </motion.div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, rotate: -8 }}
            animate={{ opacity: 1, rotate: 3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.7,
            }}
            className="absolute top-24 right-6 md:top-32 md:right-12 lg:top-36 lg:right-20 z-20"
          >
            <div className="bg-cream px-4 py-2 md:px-5 md:py-2.5 rounded-xl border-2 border-gold shadow-lg">
              <p className="font-ui text-xs md:text-sm text-heritage font-semibold whitespace-nowrap">
                4家分店 · 全马服务
              </p>
            </div>
          </motion.div>

          {/* Mobile lotus (visible below text on mobile) */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="flex lg:hidden justify-center mt-6 opacity-50"
          >
            <LotusSVG />
          </motion.div>
        </div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <ChevronDown className="w-7 h-7 text-heritage/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
