import { MessageCircle } from "lucide-react";

import { inquiryUrl } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  const url = inquiryUrl("I would like to speak with REHI about export-ready rattan furniture.");

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg outline-none transition hover:-translate-y-0.5 hover:bg-primary/85 focus-visible:ring-3 focus-visible:ring-ring/50"
      aria-label="Contact REHI on WhatsApp"
      title="Contact REHI on WhatsApp"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
    </a>
  );
}
