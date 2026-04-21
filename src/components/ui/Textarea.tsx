import { type TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className="text-sm font-medium text-on-surface-variant"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          className={`
            bg-surface-container-highest
            border-none rounded-md px-4 py-3
            text-on-background placeholder:text-outline
            focus:ring-1 focus:ring-primary-container focus:outline-none
            transition-shadow duration-200 resize-none
            ${error ? "ring-1 ring-error" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-xs text-error mt-0.5">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
