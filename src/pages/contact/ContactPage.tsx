import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/site/PageMeta";
import { TextAreaField, TextInput } from "@/components/site/FormControls";
import { SectionHeader } from "@/components/site/SectionHeader";
import { siteConfig } from "@/config/site";
import { buildWhatsAppMessage, createWhatsAppUrl } from "@/lib/whatsapp";

type ContactForm = {
  fullName: string;
  companyName: string;
  email: string;
  country: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactForm, string>>;

const initialContactForm: ContactForm = {
  fullName: "",
  companyName: "",
  email: "",
  country: "",
  message: "",
};

export function ContactPage() {
  const [form, setForm] = useState(initialContactForm);
  const [errors, setErrors] = useState<ContactErrors>({});

  function updateField<Key extends keyof ContactForm>(key: Key, value: ContactForm[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate() {
    const nextErrors: ContactErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.companyName.trim()) nextErrors.companyName = "Company name is required.";
    if (!form.email.trim()) nextErrors.email = "Email address is required.";
    if (!form.country.trim()) nextErrors.country = "Country is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const message = buildWhatsAppMessage("I would like to contact REHI.", {
      "Full name": form.fullName,
      Company: form.companyName,
      Email: form.email,
      Country: form.country,
      Requirements: form.message,
    });

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <PageMeta
        title="Contact | REHI"
        description="Contact REHI for rattan furniture export inquiries, catalog requests, and custom manufacturing discussions."
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Talk to REHI about your buying plan."
            description="Share the essentials: product interest, quantity range, destination country, timeline, and any project requirements."
          />
          <div className="mt-10 space-y-3 rounded-lg border border-border bg-card p-6 shadow-sm">
            <a href={`tel:${siteConfig.phoneDisplay.replaceAll(" ", "")}`} className="flex items-center gap-3 rounded-md p-2 text-sm font-semibold text-primary outline-none transition hover:bg-secondary focus-visible:ring-3 focus-visible:ring-ring/50">
              <Phone aria-hidden="true" className="size-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 rounded-md p-2 text-sm font-semibold text-primary outline-none transition hover:bg-secondary focus-visible:ring-3 focus-visible:ring-ring/50">
              <Mail aria-hidden="true" className="size-4" />
              {siteConfig.email}
            </a>
            <p className="flex items-start gap-3 rounded-md p-2 text-sm font-semibold text-primary">
              <MapPin aria-hidden="true" className="mt-0.5 size-4" />
              {siteConfig.address}
            </p>
          </div>
        </div>

        <form className="rounded-lg border border-border bg-card p-6 shadow-sm" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <TextInput
              label="Full name"
              name="fullName"
              value={form.fullName}
              required
              error={errors.fullName}
              onChange={(value) => updateField("fullName", value)}
            />
            <TextInput
              label="Company name"
              name="companyName"
              value={form.companyName}
              required
              error={errors.companyName}
              onChange={(value) => updateField("companyName", value)}
            />
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <TextInput
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              required
              error={errors.email}
              onChange={(value) => updateField("email", value)}
            />
            <TextInput
              label="Country"
              name="country"
              value={form.country}
              required
              error={errors.country}
              onChange={(value) => updateField("country", value)}
            />
          </div>
          <TextAreaField
            className="mt-5"
            label="Message / requirements"
            name="message"
            value={form.message}
            required
            error={errors.message}
            placeholder="Tell us what you are sourcing, target quantity, destination country, and project timeline."
            onChange={(value) => updateField("message", value)}
          />
          <Button type="submit" size="lg" className="mt-6">
            <Send aria-hidden="true" />
            Send Inquiry
          </Button>
        </form>
      </div>
    </main>
  );
}
