"use client";

import { useState } from "react";
import { BRANCHES, SERVICES } from "@/lib/constants";
import { buildBookingMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";

export function BookingForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    contact: "",
    branch: "",
    service: "",
    date: "",
    time: "",
    remarks: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const selectedBranchForMsg = BRANCHES.find((b) => b.id === form.branch);
    const branchLabel = selectedBranchForMsg
      ? t(selectedBranchForMsg.nameCN, selectedBranchForMsg.nameEN)
      : form.branch;

    const message = buildBookingMessage({
      name: form.name,
      contact: form.contact,
      branch: branchLabel,
      service: form.service,
      date: form.date,
      time: form.time,
      remarks: form.remarks || undefined,
    });

    // Find the selected branch to get its WhatsApp number
    const selectedBranch = BRANCHES.find((b) => b.id === form.branch);
    const whatsappNumber = selectedBranch?.whatsapp;

    const link = buildWhatsAppLink(whatsappNumber, message);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  const inputBase =
    "w-full bg-white border border-blush-light rounded-2xl px-5 py-3.5 min-h-[44px] font-cn-body text-sm text-heritage placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-blush focus:border-blush transition-shadow";

  const labelBase = "block font-cn-body text-sm text-heritage mb-1.5";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto bg-cream-alt rounded-2xl p-6 sm:p-8 flex flex-col gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
    >
      {/* Name */}
      <div>
        <label htmlFor="booking-name" className={labelBase}>
          {t("姓名", "Name")}
        </label>
        <input
          id="booking-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder={t("请输入姓名", "Enter your name")}
          className={inputBase}
        />
      </div>

      {/* Contact */}
      <div>
        <label htmlFor="booking-contact" className={labelBase}>
          {t("联系号码", "Contact Number")}
        </label>
        <input
          id="booking-contact"
          name="contact"
          type="tel"
          required
          value={form.contact}
          onChange={handleChange}
          placeholder={t("例如 012-345 6789", "e.g. 012-345 6789")}
          className={inputBase}
        />
      </div>

      {/* Branch */}
      <div>
        <label htmlFor="booking-branch" className={labelBase}>
          {t("首选分店", "Preferred Branch")}
        </label>
        <select
          id="booking-branch"
          name="branch"
          required
          value={form.branch}
          onChange={handleChange}
          className={inputBase + " appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%238B7355%22%20d%3D%22M2%204l4%204%204-4%22/%3E%3C/svg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10"}
        >
          <option value="">{t("请选择分店", "Select a branch")}</option>
          {BRANCHES.map((b) => (
            <option key={b.id} value={b.id}>
              {t(b.nameCN, b.nameEN)}
            </option>
          ))}
        </select>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="booking-service" className={labelBase}>
          {t("服务", "Service")}
        </label>
        <select
          id="booking-service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className={inputBase + " appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%238B7355%22%20d%3D%22M2%204l4%204%204-4%22/%3E%3C/svg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10"}
        >
          <option value="">{t("请选择服务", "Select a service")}</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={`${s.nameCN} ${s.nameEN}`}>
              {s.icon} {t(s.nameCN, s.nameEN)}
            </option>
          ))}
        </select>
      </div>

      {/* Date & Time row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="booking-date" className={labelBase}>
            {t("首选日期", "Preferred Date")}
          </label>
          <input
            id="booking-date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="booking-time" className={labelBase}>
            {t("首选时间", "Preferred Time")}
          </label>
          <input
            id="booking-time"
            name="time"
            type="time"
            required
            value={form.time}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      {/* Remarks */}
      <div>
        <label htmlFor="booking-remarks" className={labelBase}>
          {t("备注", "Remarks")} <span className="text-text-muted/60">({t("选填", "Optional")})</span>
        </label>
        <textarea
          id="booking-remarks"
          name="remarks"
          value={form.remarks}
          onChange={handleChange}
          rows={3}
          placeholder={t("如有特殊需求，请在此备注", "Any special requests or notes")}
          className={inputBase + " resize-none"}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-heritage text-cream font-ui text-base tracking-wide py-4 min-h-[48px] rounded-full hover:bg-heritage/90 active:scale-[0.98] transition-all shadow-md"
      >
        {t("📲 发送至 WhatsApp", "📲 Send via WhatsApp")}
      </button>

      {/* Reassurance */}
      <p className="text-center font-cn-body text-xs text-text-muted leading-relaxed">
        {t(
          "您的预约信息将通过 WhatsApp 发送至所选分店。我们的团队将尽快确认您的预约时间。",
          "Your booking details will be sent to the selected branch via WhatsApp. Our team will confirm your appointment shortly."
        )}
      </p>
    </form>
  );
}
