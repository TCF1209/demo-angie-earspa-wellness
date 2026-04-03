"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { SERVICES } from "@/lib/constants";
import { buildServiceBookingMessage } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";

interface ServiceCardProps {
  service: (typeof SERVICES)[0];
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 48px rgba(242,164,158,0.4)",
      }}
      className="group bg-blush-light rounded-2xl p-7 flex flex-col items-start gap-4 cursor-pointer transition-colors"
    >
      {/* Icon */}
      <span className="text-4xl leading-none">{service.icon}</span>

      {/* Name */}
      <div>
        <h3 className="font-cn-heading text-xl text-heritage leading-tight">
          {t(service.nameCN, service.nameEN)}
        </h3>
      </div>

      {/* Description (1-line) */}
      <p className="font-cn-body text-sm text-text-muted leading-relaxed line-clamp-1">
        {t(service.descCN, service.descEN)}
      </p>

      {/* Price pill */}
      <span className="inline-block bg-cream text-heritage font-ui text-sm px-4 py-1.5 rounded-full">
        {t(`从 RM ${service.priceFrom} 起`, `From RM ${service.priceFrom}`)}
      </span>

      {/* Link */}
      <a
        href={buildServiceBookingMessage(service.nameCN)}
        target="_blank"
        rel="noopener noreferrer"
        className="font-ui text-sm text-rose-deep hover:text-heritage transition-colors mt-auto"
      >
        {t("了解更多 →", "Learn more →")}
      </a>
    </motion.div>
  );
}
