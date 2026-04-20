// import { useTheme } from "@/hooks/use-theme";
import { Dumbbell } from "lucide-react";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  position: "center" | "start" | "end";
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  position = "center",
  className,
}: SectionTitleProps) {
  // Hooks
  // const { theme } = useTheme();

  return (
    <div
      className={`section-title relative z-50 text-${position} ${className}`}
    >
      {/* Styled Title */}
      {/* <div className=" decorated-text relative w-fit">
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
            {subtitle.toUpperCase()}
          </text>
          <text
            x="45%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Baloo Thambi 2, sans-serif"
            fontSize="64px"
            fontWeight="bold"
            fill={theme === "light" ? "" : "#27272a"}
          >
            {subtitle.toUpperCase()}
          </text>
        </svg>
      </div> */}

      <h2
        className="uppercase text-6xl font-bold text-transparent"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, black 95%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, black 95%)",
          border: "1px solid",
          borderImageSource:
            "linear-gradient(177.84deg, rgba(255, 255, 255, 0.5) -10.01%, rgba(36, 36, 36, 0.5) 141.87%)",
          WebkitTextStroke: "2px gray",
        }}
      >
        {title}
      </h2>

      <p
        className={`font-inter rtl:font-tajawal text-sm text-[#FF4100] flex justify-${position} items-center gap-2 capitalize font-semibold -mt-6 ml-2 relative z-10`}
      >
        {/* Icon */}
        <Dumbbell size={22} className="rotate-45" />
        {/* Small Title */}
        <span>{subtitle}</span>
      </p>
    </div>
  );
}
