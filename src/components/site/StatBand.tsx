import { companyStats } from "@/data/company";
import { cn } from "@/lib/utils";

type StatBandProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function StatBand({ className, variant = "light" }: StatBandProps) {
  return (
    <section
      className={cn(
        "border-y",
        variant === "dark"
          ? "border-primary-foreground/15 bg-primary text-primary-foreground"
          : "border-border bg-secondary/55 text-foreground",
        className
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
        {companyStats.map((stat) => (
          <div key={stat.label} className="px-2 py-4 text-center sm:px-4">
            <p className="font-noto-serif text-2xl font-semibold sm:text-3xl">{stat.value}</p>
            <p
              className={cn(
                "mt-2 text-xs font-medium uppercase tracking-[0.14em]",
                variant === "dark" ? "text-primary-foreground/70" : "text-muted-foreground"
              )}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
