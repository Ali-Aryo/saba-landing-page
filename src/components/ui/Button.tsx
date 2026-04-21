import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-container text-on-primary-fixed hover:bg-surface-tint hover:text-on-primary transition-all duration-300",
  secondary:
    "border border-outline-variant/20 text-on-background hover:bg-surface-container-low transition-all duration-300",
  tertiary:
    "text-primary-container hover:text-surface-tint transition-colors duration-300",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          font-medium text-sm tracking-tight
          px-8 py-4 rounded-md
          active:scale-[0.97] transition-transform
          cursor-pointer
          disabled:opacity-50 disabled:pointer-events-none
          ${variantClasses[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
