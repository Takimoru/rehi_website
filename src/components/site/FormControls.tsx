import { cn } from "@/lib/utils";

type FieldProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  className?: string;
};

type TextInputProps = FieldProps & {
  type?: "text" | "email";
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

type TextAreaFieldProps = FieldProps & {
  value: string;
  placeholder?: string;
  rows?: number;
  onChange: (value: string) => void;
};

type SelectFieldProps = FieldProps & {
  value: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  onChange: (value: string) => void;
};

function RequiredMark({ show }: { show?: boolean }) {
  return show ? <span className="text-destructive"> *</span> : null;
}

export function TextInput({
  label,
  name,
  type = "text",
  value,
  placeholder,
  required,
  error,
  className,
  onChange,
}: TextInputProps) {
  return (
    <label className={cn("block", className)} htmlFor={name}>
      <span className="text-sm font-semibold text-foreground">
        {label}
        <RequiredMark show={required} />
      </span>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 w-full rounded-md border border-input bg-card px-3 text-sm outline-none transition placeholder:text-muted-foreground/75 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  value,
  placeholder,
  required,
  rows = 5,
  error,
  className,
  onChange,
}: TextAreaFieldProps) {
  return (
    <label className={cn("block", className)} htmlFor={name}>
      <span className="text-sm font-semibold text-foreground">
        {label}
        <RequiredMark show={required} />
      </span>
      <textarea
        id={name}
        name={name}
        value={value}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-md border border-input bg-card px-3 py-3 text-sm leading-6 outline-none transition placeholder:text-muted-foreground/75 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </label>
  );
}

export function SelectField({
  label,
  name,
  value,
  options,
  placeholder = "Select an option",
  required,
  error,
  className,
  onChange,
}: SelectFieldProps) {
  return (
    <label className={cn("block", className)} htmlFor={name}>
      <span className="text-sm font-semibold text-foreground">
        {label}
        <RequiredMark show={required} />
      </span>
      <select
        id={name}
        name={name}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 w-full rounded-md border border-input bg-card px-3 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </label>
  );
}
