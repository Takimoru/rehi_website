import { siteConfig } from "@/config/site";

type MessageDetails = Record<string, string | undefined>;

export function buildWhatsAppMessage(title: string, details: MessageDetails = {}) {
  const lines = [
    `Hello ${siteConfig.brand},`,
    "",
    title,
    ...Object.entries(details)
      .filter(([, value]) => Boolean(value?.trim()))
      .map(([key, value]) => `${key}: ${value}`),
  ];

  return lines.join("\n");
}

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function inquiryUrl(title: string, details?: MessageDetails) {
  return createWhatsAppUrl(buildWhatsAppMessage(title, details));
}
