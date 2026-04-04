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
    // Translations
    const locale = useLocale();

    const [showPassword, setShowPassword] = React.useState(false);

    const isPassword = type === "password";
    const currentType = isPassword
      ? showPassword
        ? "text"
        : "password"
      : type;

    const handleTogglePassword = React.useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      setShowPassword((prev) => !prev);
    }, []);

    const renderedEndIcon = isPassword ? (
      <button
        type="button"
        tabIndex={-1}
        onClick={handleTogglePassword}
        className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5 text-gray-300" />
        ) : (
          <Eye className="h-5 w-5 text-gray-300" />
        )}
      </button>
    ) : (
      endIcon
    );

    return (
      <div
        className={cn(
          "flex h-14 w-full items-center rounded-full border border-input bg-background px-4 text-sm transition-colors focus-within:border-primary focus-within:outline-none focus-within:ring-1 focus-within:ring-primary disabled:cursor-not-allowed disabled:opacity-50 font-baloo-thambi rtl:font-tajawal",
          containerClassName,
        )}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {startIcon && (
          <div className="me-3 flex items-center text-muted-foreground">
            {startIcon}
          </div>
        )}
        <input
          type={currentType}
          className={cn(
            "flex h-full w-full bg-transparent py-2 outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
        {renderedEndIcon && (
          <div className="ms-3 flex items-center text-muted-foreground">
            {renderedEndIcon}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
