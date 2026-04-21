import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className="text-sm font-medium text-on-surface-variant"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={`
            bg-surface-container-highest
            border-none rounded-md px-4 py-3
            text-on-background placeholder:text-outline
            focus:ring-1 focus:ring-primary-container focus:outline-none
            transition-shadow duration-200
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

Input.displayName = "Input";
export default Input;
