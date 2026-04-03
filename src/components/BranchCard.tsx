"use client";

import { useState } from "react";
import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Clock, MessageCircle, ChevronDown } from "lucide-react";
import type { BRANCHES } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface BranchCardProps {
  branch: (typeof BRANCHES)[0];
  index: number;
}

export function BranchCard({ branch, index }: BranchCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  const isOdd = index % 2 === 0; // 0-indexed: first card slides from left
  const xInitial = isOdd ? -30 : 30;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xInitial }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xInitial }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      {/* Desktop card */}
      <div className="hidden md:flex bg-cream rounded-2xl p-7 gap-6 items-start border border-blush-light/60 hover:border-blush transition-colors">
        {/* Info */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-heading text-xl text-heritage font-semibold">
            {branch.name}
          </h3>

          <div className="flex items-start gap-2 text-text-muted">
            <MapPin size={16} className="mt-0.5 shrink-0 text-rose-deep" />
            <span className="font-cn-body text-sm">{branch.address}</span>
          </div>

          <div className="flex items-start gap-2 text-text-muted">
            <Clock size={16} className="mt-0.5 shrink-0 text-rose-deep" />
            <span className="font-cn-body text-sm">{branch.hours}</span>
          </div>
        </div>

        {/* WhatsApp button - reveals on hover */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <a
            href={buildWhatsAppLink(branch.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-heritage text-cream font-ui text-sm px-5 py-3 rounded-full hover:bg-heritage/90 transition-colors whitespace-nowrap"
          >
            <MessageCircle size={16} />
            WhatsApp 预约
          </a>
        </motion.div>
      </div>

      {/* Mobile accordion */}
      <div className="md:hidden bg-cream rounded-2xl border border-blush-light/60 overflow-hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between p-5 text-left"
        >
          <h3 className="font-heading text-lg text-heritage font-semibold">
            {branch.name}
          </h3>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown size={20} className="text-text-muted" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 flex flex-col gap-3">
                <div className="flex items-start gap-2 text-text-muted">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-rose-deep" />
                  <span className="font-cn-body text-sm">{branch.address}</span>
                </div>

                <div className="flex items-start gap-2 text-text-muted">
                  <Clock size={16} className="mt-0.5 shrink-0 text-rose-deep" />
                  <span className="font-cn-body text-sm">{branch.hours}</span>
                </div>

                <a
                  href={buildWhatsAppLink(branch.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-heritage text-cream font-ui text-sm px-5 py-3 rounded-full hover:bg-heritage/90 transition-colors mt-1"
                >
                  <MessageCircle size={16} />
                  WhatsApp 预约
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
