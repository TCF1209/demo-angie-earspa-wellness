"use client";

import { motion } from "framer-motion";
import { BookingForm } from "@/components/BookingForm";
import { ChineseDecorDivider } from "@/components/ChineseDecorDivider";

export default function BookPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blush-light/50 to-cream text-center relative grain-texture">
        <motion.h1
          className="font-cn-heading text-4xl md:text-5xl text-heritage mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          预约
        </motion.h1>
        <motion.p
          className="font-heading text-2xl text-text-muted italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Book Now
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
        <div className="max-w-2xl mx-auto">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
