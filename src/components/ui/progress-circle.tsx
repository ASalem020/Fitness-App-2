import * as React from "react";
import { cn } from "@/lib/utils/tailwind-merge";

interface ProgressCircleProps extends React.SVGProps<SVGSVGElement> {
  value: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
  showTrack?: boolean;
  children?: React.ReactNode;
  circleClassName?: string;
  progressClassName?: string;
}

export function ProgressCircle({
  value,
  size = 100,
  strokeWidth = 6,
  showValue = false,
  showTrack = false,
  className,
  circleClassName,
  progressClassName,
  children,
  ...props
}: ProgressCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  // Ensure value is between 0 and 100
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  const offset = circumference - (normalizedValue / 100) * circumference;

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="rotate-[-90deg] overflow-visible"
        {...props}
      >
        {/* Background circle (the trace) */}
        {showTrack && (
          <circle
            className={cn("text-white/10 fill-none", circleClassName)}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        )}
        {/* Foreground circle (the progress) */}
        <circle
          className={cn(
            "text-primary fill-none transition-all duration-500 ease-in-out",
            progressClassName,
          )}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        {showValue ? (
          <span className="text-sm font-medium">
            {Math.round(normalizedValue)}%
          </span>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
