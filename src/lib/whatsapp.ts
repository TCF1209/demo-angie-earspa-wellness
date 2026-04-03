import { WHATSAPP_NUMBER } from "./constants";

interface BookingDetails {
  name: string;
  contact: string;
  branch: string;
  service: string;
  date: string;
  time: string;
  remarks?: string;
}

export function buildWhatsAppLink(
  number: string = WHATSAPP_NUMBER,
  message?: string
): string {
  const base = `https://wa.me/${number}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export function buildBookingMessage(details: BookingDetails): string {
  let msg = `🌿 Angie Earspa Wellness 预约 / Booking Request\n\n`;
  msg += `姓名 Name: ${details.name}\n`;
  msg += `联系号码 Contact: ${details.contact}\n`;
  msg += `首选分店 Branch: ${details.branch}\n`;
  msg += `服务 Service: ${details.service}\n`;
  msg += `日期 Date: ${details.date}\n`;
  msg += `时间 Time: ${details.time}\n`;
  if (details.remarks) {
    msg += `备注 Remarks: ${details.remarks}\n`;
  }
  msg += `\n期待为您服务！We look forward to serving you!`;
  return msg;
}

export function buildPackageBookingMessage(
  packageName: string,
  number: string = WHATSAPP_NUMBER
): string {
  const msg = `🌿 您好！我想预约${packageName}。\nHi! I'd like to book the ${packageName}. Please let me know the available time slots.`;
  return buildWhatsAppLink(number, msg);
}

export function buildServiceBookingMessage(
  serviceName: string,
  number: string = WHATSAPP_NUMBER
): string {
  const msg = `🌿 您好！我想了解${serviceName}服务。\nHi! I'd like to enquire about the ${serviceName} service.`;
  return buildWhatsAppLink(number, msg);
}
