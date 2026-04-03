"use client";

import { motion } from "framer-motion";
import { BranchCard } from "@/components/BranchCard";
import { BRANCHES } from "@/lib/constants";
import { ChineseDecorDivider } from "@/components/ChineseDecorDivider";
import { useLanguage } from "@/lib/language-context";

export default function BranchesPage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blush-light/50 to-cream text-center relative grain-texture">
        <motion.h1
          className="font-cn-heading text-4xl md:text-5xl text-heritage mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t("全马4家分店", "4 Locations Across Malaysia")}
        </motion.h1>
        <motion.p
          className="font-heading text-2xl text-text-muted italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("4 Locations Across Malaysia", "全马4家分店")}
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {BRANCHES.map((branch, i) => (
            <BranchCard key={branch.id} branch={branch} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
