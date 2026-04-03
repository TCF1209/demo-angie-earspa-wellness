"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { PACKAGES } from "@/lib/constants";
import { buildPackageBookingMessage } from "@/lib/whatsapp";

interface PackageCardProps {
  pkg: (typeof PACKAGES)[0];
  index: number;
}

export function PackageCard({ pkg, index }: PackageCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Popular card animates last with extra pop
  const delay = pkg.popular ? 0.4 : index * 0.1;
  const initialScale = pkg.popular ? 0.9 : 0.94;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: initialScale }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: initialScale }
      }
      transition={{
        duration: 0.55,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.25 },
      }}
      className={`relative rounded-2xl p-8 flex flex-col gap-5 bg-cream border-2 transition-all duration-300 ${
        pkg.popular
          ? "border-gold shadow-[0_0_24px_rgba(201,169,110,0.35)] hover:shadow-[0_0_32px_rgba(201,169,110,0.55)]"
          : "border-gold/30 hover:border-gold"
      }`}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-white font-ui text-xs tracking-wider px-5 py-1 rounded-full shadow-md">
          Most Popular
        </span>
      )}

      {/* Package name */}
      <div className="text-center">
        <h3 className="font-cn-heading text-2xl text-heritage">
          {pkg.nameCN}
        </h3>
        <p className="font-heading text-lg text-rose-deep mt-0.5">
          {pkg.nameEN}
        </p>
      </div>

      {/* Price */}
      <div className="text-center">
        <span className="font-heading text-4xl text-heritage font-semibold">
          RM {pkg.price}
        </span>
      </div>

      {/* Divider */}
      <div className="w-16 h-px bg-gold/40 mx-auto" />

      {/* Items list */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {pkg.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 font-cn-body text-sm text-text-muted"
          >
            <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* WhatsApp booking button */}
      <a
        href={buildPackageBookingMessage(`${pkg.nameCN} ${pkg.nameEN}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-heritage text-cream font-ui text-sm tracking-wide py-3.5 rounded-full hover:bg-heritage/90 transition-colors mt-auto"
      >
        立即预约 Book Now
      </a>
    </motion.div>
  );
}
