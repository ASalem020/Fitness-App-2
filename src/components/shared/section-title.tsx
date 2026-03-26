import { useTheme } from "@/hooks/use-theme";
import { Dumbbell } from "lucide-react";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  // Hooks
  const { theme } = useTheme();

  return (
    <div className="section-title font-baloo-thambi relative">
      {/* Styled Title */}
      <div className="decorated-text relative after:absolute after:bg-gradient-to-b after:from-transparent after:via-45% after:via-white/25 after:to-75% after:to-white dark:after:via-zinc-800/25 dark:after:to-zinc-800 after:w-[15.625rem] after:h-[4.375rem] after:inset-0 w-fit">
        <svg width="250" height="70" viewBox="0 0 250 70">
          <text
            x="45%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Baloo Thambi 2, sans-serif"
            fontSize="64px"
            fontWeight="bold"
            fill="none"
            stroke={theme === "light" ? "#DBDCDC" : "#535454"}
            strokeWidth="3"
          >
            {title.toUpperCase()}
          </text>
          <text
            x="45%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Baloo Thambi 2, sans-serif"
            fontSize="64px"
            fontWeight="bold"
            fill={theme === "light" ? "#ffffff" : "#27272a"}
          >
            {title.toUpperCase()}
          </text>
        </svg>
      </div>

      <p className="text-sm text-[#FF4100] flex items-center gap-2 capitalize font-semibold -mt-5 ml-2 relative z-10">
        {/* Icon */}
        <Dumbbell size={22} className="rotate-45" />
        {/* Small Title */}
        <span>{title}</span>
      </p>
    </div>
  );
}
