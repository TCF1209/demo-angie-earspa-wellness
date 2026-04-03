"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { ChineseDecorDivider } from "@/components/ChineseDecorDivider";

function BrandPhilosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-cn-heading text-xl md:text-2xl text-heritage leading-relaxed mb-6">
            我们相信，真正的美丽源自内在的和谐与平衡。Angie Earspa
            将中华传统养生智慧与现代美容科技相结合，为每一位客人打造专属的身心疗愈体验。
          </p>
          <p className="font-heading text-lg text-text-muted italic leading-relaxed">
            We believe true beauty begins from within. Angie Earspa blends the
            wisdom of traditional Chinese wellness with modern beauty expertise —
            creating a sanctuary where every visit is a ritual of renewal.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 relative"
          initial={{ x: 40, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery-3.webp"
              alt="Angie Earspa Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blush/20 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

function BrandValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const values = [
    {
      icon: "🌿",
      titleCN: "传统智慧",
      titleEN: "Traditional Wisdom",
      descCN: "传承千年中华养生精髓，以古法智慧呵护身心",
      descEN:
        "Inheriting millennia of Chinese wellness wisdom to nurture body and soul",
    },
    {
      icon: "✨",
      titleCN: "个人化护理",
      titleEN: "Personalised Care",
      descCN: "每一位客人都是独一无二的，我们量身定制专属方案",
      descEN:
        "Every guest is unique — we create bespoke treatment plans tailored to you",
    },
    {
      icon: "🏡",
      titleCN: "温馨环境",
      titleEN: "Serene Environment",
      descCN: "精心打造的疗愈空间，让您远离喧嚣，享受宁静",
      descEN:
        "A thoughtfully designed healing space where you escape the noise and find peace",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-cream-alt">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="font-cn-heading text-3xl md:text-4xl text-heritage mb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            我们的理念
          </motion.h2>
          <motion.p
            className="font-heading text-xl text-text-muted italic"
            initial={{ x: -20, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Our Values
          </motion.p>
          <motion.div
            className="h-[2px] w-24 bg-gold mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={val.titleCN}
              className="bg-white/80 rounded-2xl p-8 text-center border border-gold/10 hover:border-gold/40 transition-colors shadow-md"
              initial={{ y: 30, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 48px rgba(242,164,158,0.3)",
              }}
            >
              <span className="text-4xl mb-4 block">{val.icon}</span>
              <h3 className="font-cn-heading text-xl text-heritage mb-1">
                {val.titleCN}
              </h3>
              <p className="font-heading text-sm text-text-muted italic mb-3">
                {val.titleEN}
              </p>
              <p className="font-cn-body text-sm text-text-muted leading-relaxed">
                {val.descCN}
              </p>
              <p className="text-xs text-text-muted/70 mt-1">{val.descEN}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-blush-light/60 to-cream text-center relative grain-texture">
        <motion.div
          className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-gold/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo.jpg"
            alt={BRAND.nameCN}
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.h1
          className="font-cn-heading text-4xl md:text-5xl text-heritage mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          关于我们
        </motion.h1>
        <motion.p
          className="font-heading text-2xl text-text-muted italic mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Us
        </motion.p>
        <motion.p
          className="font-cn-heading text-lg text-heritage"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {BRAND.nameCN}
        </motion.p>
        <motion.p
          className="font-ui text-text-muted"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {BRAND.nameEN}
        </motion.p>
      </section>

      <ChineseDecorDivider />
      <BrandPhilosophy />
      <ChineseDecorDivider />
      <BrandValues />
    </>
  );
}
