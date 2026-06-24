import { useState } from "react";
import type { FormEvent } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageMeta } from "@/components/site/PageMeta";
import { SelectField, TextAreaField, TextInput } from "@/components/site/FormControls";
import { SectionHeader } from "@/components/site/SectionHeader";
import { customCapabilities, customMaterials, customProcess } from "@/data/company";
import { buildWhatsAppMessage, createWhatsAppUrl } from "@/lib/whatsapp";

const projectTypes = [
  "Hospitality furniture",
  "Wholesale collection",
  "Retail decor range",
  "Restaurant or cafe fit-out",
  "Villa or residence project",
  "Other custom manufacturing",
];

type CustomProjectForm = {
  fullName: string;
  companyName: string;
  country: string;
  projectType: string;
  description: string;
};

type CustomProjectErrors = Partial<Record<keyof CustomProjectForm, string>>;

const initialForm: CustomProjectForm = {
  fullName: "",
  companyName: "",
  country: "",
  projectType: "",
  description: "",
};

export function CustomProjectPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<CustomProjectErrors>({});

  function updateField<Key extends keyof CustomProjectForm>(key: Key, value: CustomProjectForm[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function validate() {
    const nextErrors: CustomProjectErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.projectType.trim()) nextErrors.projectType = "Project type is required.";
    if (!form.description.trim()) nextErrors.description = "Project description is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) return;

    const message = buildWhatsAppMessage("I would like to discuss a custom project.", {
      "Full name": form.fullName,
      Company: form.companyName,
      Country: form.country,
      "Project type": form.projectType,
      Description: form.description,
    });

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <PageMeta
        title="Custom Project Inquiry | REHI"
        description="Send REHI a custom rattan furniture or decor brief for hospitality, wholesale, or interior project development."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          eyebrow="Custom project"
          title="Turn a buyer brief into export-ready rattan production."
          description="Use this page when the product is not a standard SKU, the project needs custom dimensions, or the buyer wants a hospitality or wholesale program developed from references."
        />
      </section>

      <section className="bg-card px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {customCapabilities.map((capability) => (
              <article key={capability.title} className="rounded-lg border border-border bg-background p-5 shadow-sm">
                <h3 className="font-noto-serif text-xl font-semibold">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Process"
            title="A practical flow for custom manufacturing."
            description="REHI keeps development centered on feasibility, samples, specifications, and export constraints."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {customProcess.map((step) => (
              <article key={step.title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <h3 className="font-noto-serif text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Material options
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {customMaterials.map((material) => (
              <span key={material} className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                {material}
              </span>
            ))}
          </div>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
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
                onChange={(value) => updateField("companyName", value)}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextInput
                label="Country"
                name="country"
                value={form.country}
                onChange={(value) => updateField("country", value)}
              />
              <SelectField
                label="Project type"
                name="projectType"
                value={form.projectType}
                required
                error={errors.projectType}
                options={projectTypes.map((type) => ({ label: type, value: type }))}
                onChange={(value) => updateField("projectType", value)}
              />
            </div>
            <TextAreaField
              label="Project description"
              name="description"
              value={form.description}
              required
              error={errors.description}
              placeholder="Share product references, target quantities, destination country, material notes, timeline, or packing requirements."
              onChange={(value) => updateField("description", value)}
            />
            <Button type="submit" size="lg">
              <Send aria-hidden="true" />
              Send Project Brief
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
