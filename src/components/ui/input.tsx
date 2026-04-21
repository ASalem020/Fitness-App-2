import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";
import { useLocale } from "use-intl";

export interface InputProps extends React.ComponentProps<"input"> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, startIcon, endIcon, containerClassName, ...props },
    ref,
  ) => {
    const locale = useLocale();
    const [showPassword, setShowPassword] = React.useState(false);

    const isPassword = type === "password";
    const currentType = isPassword
      ? showPassword
        ? "text"
        : "password"
      : type;

    const handleTogglePassword = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowPassword((prev) => !prev);
    };

    const renderedEndIcon = isPassword ? (
      <button type="button" onClick={handleTogglePassword}>
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    ) : (
      endIcon
    );

    return (
      <div
        className={cn(
          "flex h-14 w-full items-center rounded-full border border-input bg-background px-4",
          containerClassName
        )}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {startIcon && <div className="me-2">{startIcon}</div>}

        <input
          type={currentType}
          className={cn(
            "flex-1 bg-transparent outline-none",
            className
          )}
          ref={ref}
          {...props}
        />

        {renderedEndIcon && <div className="ms-2">{renderedEndIcon}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };