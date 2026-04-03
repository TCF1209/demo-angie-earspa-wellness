"use client";

import { motion } from "framer-motion";
import { PackageCard } from "@/components/PackageCard";
import { PACKAGES } from "@/lib/constants";
import { ChineseDecorDivider } from "@/components/ChineseDecorDivider";
import { useLanguage } from "@/lib/language-context";

export default function PackagesPage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-cream text-center relative">
        <div className="absolute inset-0 border-8 border-gold/10 m-4 rounded-3xl pointer-events-none" />
        <motion.h1
          className="font-cn-heading text-4xl md:text-5xl text-heritage mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("高端养生套餐", "Premium Wellness Packages")}
        </motion.h1>
        <motion.p
          className="font-heading text-2xl text-text-muted italic mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("Premium Wellness Packages", "高端养生套餐")}
        </motion.p>
        <motion.p
          className="font-cn-body text-text-muted"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("每一个套餐，都是专属于您的疗愈旅程", "Every package is a healing journey made just for you")}
        </motion.p>
        <motion.div
          className="h-[2px] w-24 bg-gold mx-auto mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </section>

      <ChineseDecorDivider />

      <section className="py-24 px-6 bg-cream-alt">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
        <p className="text-center text-sm text-text-muted/60 mt-12 font-cn-body">
          {t("* 以上价格仅供参考，详情请通过 WhatsApp 咨询", "* Prices are for reference only, please enquire via WhatsApp")}
        </p>
      </section>
    </>
  );
}
