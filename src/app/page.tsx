"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ChineseDecorDivider } from "@/components/ChineseDecorDivider";
import {
  SERVICES,
  TESTIMONIALS,
  BRANCHES,
  BRAND,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import { MapPin, MessageCircle } from "lucide-react";

function SectionTitle({
  cn,
  en,
  className = "",
}: {
  cn: string;
  en: string;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <div ref={ref} className={`text-center mb-16 ${className}`}>
      <motion.h2
        className="font-cn-heading text-3xl md:text-4xl lg:text-5xl text-heritage mb-2"
        initial={{ x: -20, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {t(cn, en)}
      </motion.h2>
      <motion.p
        className="font-heading text-xl md:text-2xl text-text-muted italic"
        initial={{ x: -20, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {t(en, cn)}
      </motion.p>
      <motion.div
        className="h-[2px] w-24 bg-gold mx-auto mt-6"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

function ServicesStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const services = [
    { icon: "👂", label: t("采耳", "Ear Spa") },
    { icon: "💆", label: t("头疗", "Head Therapy") },
    { icon: "🌸", label: t("子宫护理", "Womb Care") },
    { icon: "✨", label: t("除毛", "Hair Removal") },
    { icon: "👁️", label: t("洗眼", "Eye Cleansing") },
    { icon: "🧖", label: t("养生套餐", "Wellness Packages") },
  ];

  return (
    <div ref={ref} className="py-8 bg-cream-alt overflow-x-auto">
      <div className="flex justify-center gap-4 md:gap-8 px-6 min-w-max md:min-w-0">
        {services.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex flex-col items-center gap-2 px-4 py-3 rounded-full bg-white/70 border border-gold/20 hover:border-gold/60 transition-colors cursor-default"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <span className="text-2xl">{s.icon}</span>
            <span className="font-cn-body text-sm text-heritage whitespace-nowrap">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();
  const items = [
    {
      icon: "🌿",
      titleCN: "传统工艺",
      titleEN: "Traditional Craft",
      descCN: "源自中国传统采耳技艺，经专业培训师资",
      descEN: "Rooted in traditional Chinese ear care, with professionally trained therapists",
    },
    {
      icon: "✨",
      titleCN: "专属体验",
      titleEN: "Personalised Experience",
      descCN: "每位客人享有私密、舒适的个人化护理",
      descEN: "Every guest enjoys private, comfortable, personalised care",
    },
    {
      icon: "🏆",
      titleCN: "高端品质",
      titleEN: "Premium Quality",
      descCN: "使用顶级养生产品，打造奢华疗愈体验",
      descEN: "Using premium wellness products for a luxurious healing experience",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-cream relative grain-texture">
      <SectionTitle cn="为什么选择我们？" en="The Angie Experience" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.titleCN}
            className={`bg-white/80 rounded-2xl p-8 text-center border border-gold/10 hover:border-gold/40 transition-colors ${
              i === 1 ? "md:-translate-y-4 shadow-lg" : "shadow-md"
            }`}
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: i === 1 ? -16 : 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: i === 1 ? -24 : -8, boxShadow: "0 20px 48px rgba(242,164,158,0.3)" }}
          >
            <span className="text-4xl mb-4 block">{item.icon}</span>
            <h3 className="font-cn-heading text-xl text-heritage mb-1">
              {t(item.titleCN, item.titleEN)}
            </h3>
            <p className="font-heading text-sm text-text-muted italic mb-3">
              {t(item.titleEN, item.titleCN)}
            </p>
            <p className="font-cn-body text-sm text-text-muted leading-relaxed">
              {t(item.descCN, item.descEN)}
            </p>
            <p className="text-xs text-text-muted/70 mt-1">{t(item.descEN, item.descCN)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-24 px-6 bg-cream-alt">
      <SectionTitle cn="我们的服务" en="Our Services" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.slice(0, 4).map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <Link
          href="/packages"
          className="inline-block font-ui text-heritage hover:text-rose-deep transition-colors border-b border-gold pb-1"
        >
          {t("查看全部套餐 →", "View All Packages →")}
        </Link>
      </motion.div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-cream-alt">
      <SectionTitle cn="顾客好评" en="What Our Clients Say" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} index={i} />
        ))}
      </div>
    </section>
  );
}

function BranchesPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-24 px-6 bg-cream">
      <SectionTitle cn="找到我们" en="Find Us" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BRANCHES.map((branch, i) => (
          <motion.div
            key={branch.id}
            className="bg-white/80 rounded-2xl p-6 text-center border border-gold/10 hover:border-gold/40 transition-all hover:shadow-lg"
            initial={{ x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <MapPin className="w-6 h-6 text-blush mx-auto mb-3" />
            <h3 className="font-cn-heading text-lg text-heritage mb-2">
              {branch.name}
            </h3>
            <p className="text-sm text-text-muted mb-4">{branch.address}</p>
            <a
              href={buildWhatsAppLink(branch.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush/10 text-rose-deep text-sm font-ui hover:bg-blush/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/branches"
          className="font-ui text-heritage hover:text-rose-deep transition-colors border-b border-gold pb-1"
        >
          {t("查看所有分店详情 →", "View All Branches →")}
        </Link>
      </div>
    </section>
  );
}

function CTABanner() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blush to-rose-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-peach-warm blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-cn-heading text-3xl md:text-4xl text-white mb-3">
          {t("预约您的专属体验", "Book Your Experience Today")}
        </h2>
        <p className="font-heading text-xl text-white/80 italic mb-8">
          {t("Book Your Experience Today", "预约您的专属体验")}
        </p>
        <a
          href={buildWhatsAppLink(WHATSAPP_NUMBER)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-heritage text-cream border-2 border-gold font-ui text-lg hover:scale-105 hover:shadow-xl transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          {t("📲 立即预约 WhatsApp", "📲 Book via WhatsApp")}
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesStrip />
      <ChineseDecorDivider />
      <WhyChooseUs />
      <ChineseDecorDivider />
      <ServicesPreview />
      <ChineseDecorDivider />
      <TestimonialsSection />
      <ChineseDecorDivider />
      <BranchesPreview />
      <CTABanner />
    </>
  );
}
