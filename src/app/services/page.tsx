"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { buildServiceBookingMessage } from "@/lib/whatsapp";
import { ChineseDecorDivider } from "@/components/ChineseDecorDivider";
import { MessageCircle } from "lucide-react";

function ServiceDetail({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.section
      ref={ref}
      className={`py-16 px-6 ${index % 2 === 0 ? "bg-cream" : "bg-cream-alt"} relative grain-texture`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`max-w-5xl mx-auto flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-12 items-center`}
      >
        <motion.div
          className="lg:w-1/2 w-full relative aspect-[4/3] rounded-2xl overflow-hidden"
          initial={{ x: isEven ? -40 : 40, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blush/30 to-transparent z-10" />
          <Image
            src={`/images/gallery-${(index % 5) + 1}.webp`}
            alt={service.nameEN}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ x: isEven ? 40 : -40, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-4xl mb-4 block">{service.icon}</span>
          <h2 className="font-cn-heading text-3xl text-heritage mb-1">
            {service.nameCN}
          </h2>
          <p className="font-heading text-xl text-text-muted italic mb-6">
            {service.nameEN}
          </p>

          <p className="font-cn-body text-text-muted leading-relaxed mb-2">
            {service.descCN}
          </p>
          <p className="text-sm text-text-muted/70 mb-6">{service.descEN}</p>

          <ul className="space-y-2 mb-6">
            {service.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-sm text-heritage"
              >
                <span className="text-gold mt-0.5">✦</span>
                {b}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 flex-wrap">
            <p className="font-heading text-2xl text-heritage">
              从 <span className="text-rose-deep">RM {service.priceFrom}</span>{" "}
              起
            </p>
            <a
              href={buildServiceBookingMessage(service.nameCN)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-deep text-white font-ui hover:bg-blush transition-colors hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              📲 WhatsApp 预约
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blush-light/50 to-cream text-center relative grain-texture">
        <motion.h1
          className="font-cn-heading text-4xl md:text-5xl text-heritage mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          我们的服务
        </motion.h1>
        <motion.p
          className="font-heading text-2xl text-text-muted italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our Services
        </motion.p>
        <motion.div
          className="h-[2px] w-24 bg-gold mx-auto mt-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        />
      </section>

      {SERVICES.map((service, i) => (
        <div key={service.id}>
          <ServiceDetail service={service} index={i} />
          {i < SERVICES.length - 1 && <ChineseDecorDivider />}
        </div>
      ))}
    </>
  );
}
