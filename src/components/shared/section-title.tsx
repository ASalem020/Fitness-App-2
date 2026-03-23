import { Dumbbell } from "lucide-react";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="section-title font-baloo-thambi relative">
      {/* Styled Title */}
      <h2
        style={
          {
            WebkitTextStroke: "2px #BCBDBF",
          } as React.CSSProperties
        }
        className="text-white dark:text-zinc-800 text-6xl hidden md:block w-fit uppercase font-bold relative after:absolute after:size-full after:bg-gradient-to-b after:from-white/0 after:to-80% after:to-white after:z-10 after:inset-0"
      >
        {title}
      </h2>

      <p className="text-sm text-[#FF4100] flex items-center gap-2 capitalize font-semibold -mt-5 ml-2 relative z-10">
        {/* Icon */}
        <Dumbbell size={22} />
        {/* Small Title */}
        <span>{title}</span>
      </p>
    </div>
  );
}
