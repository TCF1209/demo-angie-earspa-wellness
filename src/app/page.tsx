"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ChineseDecorDivider } from "@/components/ChineseDecorDivider";
import {
  SERVICES,
  BRANCHES,
  BRAND,
  WHATSAPP_NUMBER,
  GOOGLE_RATING,
} from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";
import { MapPin, MessageCircle, Star } from "lucide-react";

function useCountUp(target: number, inView: boolean, duration = 1.5, decimals = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Number(start.toFixed(decimals)));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration, decimals]);
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value);
}

function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const { t } = useLanguage();

  const rating = useCountUp(GOOGLE_RATING.score, inView, 1.2, 1);
  const reviews = useCountUp(GOOGLE_RATING.reviews, inView, 1.5);
  const branches = useCountUp(4, inView, 0.8);
  const years = useCountUp(6, inView, 1.0);

  const stats = [
    {
      icon: <Star className="w-5 h-5 text-gold fill-gold" />,
      value: rating,
      suffix: "",
      labelCN: "Google 评分",
      labelEN: "Google Rating",
    },
    {
      icon: <span className="text-lg">💬</span>,
      value: reviews,
      suffix: "+",
      labelCN: "好评",
      labelEN: "Reviews",
    },
    {
      icon: <MapPin className="w-5 h-5 text-blush" />,
      value: branches,
      suffix: "",
      labelCN: "家分店",
      labelEN: "Branches",
    },
    {
      icon: <span className="text-lg">🏆</span>,
      value: years,
      suffix: "+",
      labelCN: "年专业服务",
      labelEN: "Years Experience",
    },
  ];

  return (
    <div className="relative z-10 px-4 md:px-6 -mt-10 md:-mt-12 mb-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl border border-gold/20 shadow-[0_8px_40px_rgba(201,169,110,0.12)] py-6 px-6 md:px-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.labelEN}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? "md:border-r md:border-gold/15" : ""
              }`}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="mb-2">{stat.icon}</div>
              <span className="font-heading text-2xl md:text-3xl font-bold text-heritage leading-none">
                {stat.value}{stat.suffix}
              </span>
              <span className="font-ui text-xs text-text-muted mt-1">
                {t(stat.labelCN, stat.labelEN)}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

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
    <div ref={ref} className="py-8 bg-cream-alt overflow-hidden">
      <div className="flex flex-wrap justify-center gap-3 md:gap-8 px-4">
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
      <TestimonialCarousel />
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
              {t(branch.nameCN, branch.nameEN)}
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
      <StatsStrip />
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
