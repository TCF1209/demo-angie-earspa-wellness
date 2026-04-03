"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { buildServiceBookingMessage } from "@/lib/whatsapp";
import { ChineseDecorDivider } from "@/components/ChineseDecorDivider";
import { useLanguage } from "@/lib/language-context";
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
  const { t } = useLanguage();
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
            sizes="(max-width: 1024px) 100vw, 50vw"
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
            {t(service.nameCN, service.nameEN)}
          </h2>
          <p className="font-heading text-xl text-text-muted italic mb-6">
            {t(service.nameEN, service.nameCN)}
          </p>

          <p className="font-cn-body text-text-muted leading-relaxed mb-2">
            {t(service.descCN, service.descEN)}
          </p>
          <p className="text-sm text-text-muted/70 mb-6">{t(service.descEN, service.descCN)}</p>

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
              {t(`从 `, `From `)}<span className="text-rose-deep">RM {service.priceFrom}</span>{t(` 起`, ``)}
            </p>
            <a
              href={buildServiceBookingMessage(service.nameCN)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-deep text-white font-ui hover:bg-blush transition-colors hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              {t("📲 WhatsApp 预约", "📲 Book via WhatsApp")}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function ServicesPage() {
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
          {t("我们的服务", "Our Services")}
        </motion.h1>
        <motion.p
          className="font-heading text-2xl text-text-muted italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("Our Services", "我们的服务")}
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
