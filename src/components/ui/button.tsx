import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/tailwind-merge";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primaryWithIcon:
          "bg-primary text-white group hover:bg-orange-700 font-baloo-thambi rounded-full pe-8 ps-6 h-12 text-base font-semibold",
        secondaryWithIcon:
          "bg-transparent border border-primary text-primary hover:bg-orange-50/45 duration-300 font-baloo-thambi rounded-full pe-2 ps-6 h-12 text-base font-semibold",
        ghostWithIcon:
          "bg-transparent text-primary hover:bg-accent font-baloo-thambi rounded-full pe-2 ps-6 h-12 text-base font-semibold flex",
        iconInsideDark:
          "bg-primary text-[#1E1E1E] hover:bg-primary/90 font-baloo-thambi rounded-full px-6 h-12 text-base font-semibold",
        iconInsideLight:
          "bg-primary text-white hover:bg-primary/90 font-baloo-thambi rounded-full px-6 h-12 text-base font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  defaultIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  iconContainerClass?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      defaultIcon,
      endIcon,
      iconContainerClass,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {defaultIcon && (
          <span
            className={cn(
              "flex items-center justify-center bg-primary group-hover:bg-orange-700 absolute -right-6   ",
              iconContainerClass,
            )}
          >
            {defaultIcon}
          </span>
        )}
        {props.children}
        {endIcon && (
          <span
            className={cn(
              "flex items-center justify-center ",
              iconContainerClass,
            )}
          >
            {endIcon}
          </span>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
