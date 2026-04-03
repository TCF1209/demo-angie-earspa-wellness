"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ChineseDecorDivider } from "@/components/ChineseDecorDivider";

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blush-light/50 to-cream text-center relative grain-texture">
        <motion.h1
          className="font-cn-heading text-4xl md:text-5xl text-heritage mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          图库
        </motion.h1>
        <motion.p
          className="font-heading text-2xl text-text-muted italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Gallery
        </motion.p>
        <motion.div
          className="h-[2px] w-24 bg-gold mx-auto mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />
      </section>

      <ChineseDecorDivider />

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rose-deep text-white font-ui text-lg hover:bg-blush transition-colors hover:scale-105 active:scale-95 border-2 border-gold/40"
          >
            想亲身体验？立即预约 →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
