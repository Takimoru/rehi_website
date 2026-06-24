import { useState } from "react";
import type { FormEvent } from "react";
import { Download, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/site/PageMeta";
import { TextInput } from "@/components/site/FormControls";
import { SectionHeader } from "@/components/site/SectionHeader";
import { siteConfig } from "@/config/site";
import { buildWhatsAppMessage, createWhatsAppUrl } from "@/lib/whatsapp";

type CatalogForm = {
  fullName: string;
  companyName: string;
  email: string;
  country: string;
};

type CatalogErrors = Partial<Record<keyof CatalogForm, string>>;

const initialCatalogForm: CatalogForm = {
  fullName: "",
  companyName: "",
  email: "",
  country: "",
};

export function CatalogPage() {
  const [form, setForm] = useState(initialCatalogForm);
  const [errors, setErrors] = useState<CatalogErrors>({});

  function updateField<Key extends keyof CatalogForm>(key: Key, value: CatalogForm[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate() {
    const nextErrors: CatalogErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.companyName.trim()) nextErrors.companyName = "Company name is required.";
    if (!form.email.trim()) nextErrors.email = "Email address is required.";
    if (!form.country.trim()) nextErrors.country = "Country is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const message = buildWhatsAppMessage("I would like to request the REHI export catalog.", {
      "Full name": form.fullName,
      Company: form.companyName,
      Email: form.email,
      Country: form.country,
    });

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <PageMeta
        title="Catalog Request | REHI"
        description="Request the REHI rattan export catalog through a WhatsApp inquiry form."
      />

      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            eyebrow="Catalog"
            title="Request the REHI export catalog."
            description="No PDF delivery is required for the MVP. Submitting this form opens WhatsApp with the buyer details sales needs for follow-up."
          />
          <div className="mt-10 rounded-lg border border-border bg-primary p-8 text-primary-foreground shadow-sm">
            <Download aria-hidden="true" className="size-8 text-secondary" />
            <h2 className="mt-5 font-noto-serif text-3xl font-semibold">
              {siteConfig.catalogLabel}
            </h2>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/78">
              Preview scope: dining, lounge, outdoor, decor, custom development, MOQ signals, finish options, and export service notes.
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
          <Button type="submit" size="lg" className="mt-6">
            <Send aria-hidden="true" />
            Request Catalog
          </Button>
        </form>
      </div>
    </main>
  );
}
