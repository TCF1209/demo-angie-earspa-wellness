"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { lang, setLang, t } = useLanguage();

  const headerBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(253,248,245,0)", "rgba(253,248,245,0.92)"]
  );
  const headerBlur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(12px)"]);
  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 1px 12px rgba(44,24,16,0.08)"]
  );

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleLang = () => setLang(lang === "zh" ? "en" : "zh");

  return (
    <>
      <motion.header
        style={{
          background: headerBg,
          backdropFilter: headerBlur,
          boxShadow: headerShadow,
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Image
                src="/images/logo.jpg"
                alt={BRAND.nameEN}
                width={48}
                height={48}
                className="rounded-full"
                priority
              />
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-heading text-lg font-semibold text-heritage leading-tight block">
                {t(BRAND.nameCN, BRAND.nameEN)}
              </span>
              <span className="font-cn-heading text-xs text-text-muted leading-tight block">
                {t(BRAND.taglineCN, BRAND.taglineEN)}
              </span>
            </div>
          </Link>

          {/* Desktop nav links + lang toggle */}
          <div className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative px-3 py-2 font-ui text-sm tracking-wide text-heritage transition-colors hover:text-rose-deep"
                    >
                      {t(link.labelCN, link.labelEN)}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-blush rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      {!isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blush rounded-full origin-left scale-x-0 transition-transform duration-250 ease-out group-hover/link:scale-x-100" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Language toggle pill */}
            <div
              className="ml-3 relative flex items-center w-[72px] h-8 rounded-full border border-gold/30 bg-cream/50 cursor-pointer select-none overflow-hidden"
              onClick={toggleLang}
              role="switch"
              aria-checked={lang === "en"}
              aria-label="Toggle language"
            >
              <motion.div
                className="absolute top-0.5 w-[34px] h-[28px] rounded-full bg-blush/80 shadow-sm"
                animate={{ left: lang === "zh" ? 1 : 35 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
              <span className={`relative z-10 flex-1 text-center text-xs font-ui transition-colors ${lang === "zh" ? "text-white font-semibold" : "text-heritage/60"}`}>
                中
              </span>
              <span className={`relative z-10 flex-1 text-center text-xs font-ui transition-colors ${lang === "en" ? "text-white font-semibold" : "text-heritage/60"}`}>
                EN
              </span>
            </div>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <div
              className="relative flex items-center w-[64px] h-7 rounded-full border border-gold/30 bg-cream/50 cursor-pointer select-none overflow-hidden"
              onClick={toggleLang}
              role="switch"
              aria-checked={lang === "en"}
              aria-label="Toggle language"
            >
              <motion.div
                className="absolute top-0.5 w-[30px] h-[24px] rounded-full bg-blush/80 shadow-sm"
                animate={{ left: lang === "zh" ? 1 : 31 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              />
              <span className={`relative z-10 flex-1 text-center text-[11px] font-ui transition-colors ${lang === "zh" ? "text-white font-semibold" : "text-heritage/60"}`}>
                中
              </span>
              <span className={`relative z-10 flex-1 text-center text-[11px] font-ui transition-colors ${lang === "en" ? "text-white font-semibold" : "text-heritage/60"}`}>
                EN
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-heritage hover:text-rose-deep transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-heritage/40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-blush-light flex flex-col"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-heritage hover:text-rose-deep transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col items-center justify-center gap-2">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.06 * i,
                        duration: 0.35,
                        ease: "easeOut" as const,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`relative block px-6 py-3 font-ui text-2xl tracking-wide transition-colors ${
                          isActive
                            ? "text-rose-deep"
                            : "text-heritage hover:text-rose-deep"
                        }`}
                      >
                        {t(link.labelCN, link.labelEN)}
                        {isActive && (
                          <motion.span
                            layoutId="mobile-nav-underline"
                            className="absolute bottom-1 left-6 right-6 h-0.5 bg-blush rounded-full"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" as const }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="p-6 text-center">
                <p className="font-cn-heading text-sm text-heritage/60">
                  {t(BRAND.nameCN, BRAND.nameEN)}
                </p>
                <p className="font-heading text-xs text-heritage/40 mt-1">
                  {t(BRAND.taglineCN, BRAND.taglineEN)}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
