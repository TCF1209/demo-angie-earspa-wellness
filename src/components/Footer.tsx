"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { NAV_LINKS, BRAND, SERVICES, BRANCHES, WHATSAPP_NUMBER } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

const quickLinks = NAV_LINKS.filter(
  (l) => l.href !== "/book" && l.href !== "/"
);
const serviceLinks = SERVICES.slice(0, 6);

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-heritage text-cream/80">
      {/* Top: logo + tagline */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <div className="relative mb-4">
            <Image
              src="/images/logo.jpg"
              alt={BRAND.nameEN}
              width={72}
              height={72}
              className="rounded-full"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.15))",
              }}
            />
          </div>
          <h3 className="font-heading text-2xl text-cream font-semibold">
            {t(BRAND.nameCN, BRAND.nameEN)}
          </h3>
          <p className="font-display text-sm italic text-gold mt-2 tracking-wide">
            {t(BRAND.taglineCN, BRAND.taglineEN)}
          </p>
        </div>

        {/* 3 Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {/* Quick links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-ui text-sm uppercase tracking-widest text-gold mb-4">
              {t("快捷链接", "Quick Links")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-ui text-sm text-cream/70 hover:text-blush transition-colors duration-200"
                  >
                    {t(link.labelCN, link.labelEN)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-ui text-sm uppercase tracking-widest text-gold mb-4">
              {t("服务项目", "Services")}
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href="/services"
                    className="font-ui text-sm text-cream/70 hover:text-blush transition-colors duration-200"
                  >
                    {t(svc.nameCN, svc.nameEN)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants}>
            <h4 className="font-ui text-sm uppercase tracking-widest text-gold mb-4">
              {t("联系我们", "Contact & Social")}
            </h4>

            {/* First branch as primary contact */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blush mt-0.5 shrink-0" />
                <span className="font-ui text-sm text-cream/70">
                  {t(BRANCHES[0].nameCN, BRANCHES[0].nameEN)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blush shrink-0" />
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="font-ui text-sm text-cream/70 hover:text-blush transition-colors duration-200"
                >
                  +{WHATSAPP_NUMBER}
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-cream/10 text-cream/80 hover:bg-blush/20 hover:text-blush transition-colors duration-200"
                  whileHover={{ rotate: -12, scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
          <p className="text-center font-ui text-xs text-cream/40 tracking-wide">
            &copy; 2025 {t(BRAND.nameCN, BRAND.nameEN)}
          </p>
        </div>
      </div>
    </footer>
  );
}
