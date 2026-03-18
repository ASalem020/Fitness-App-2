import { Dumbbell } from "lucide-react";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="section-title font-baloo-thambi relative">
      {/* Styled Title */}
      <h2 className="text-white dark:text-zinc-800 text-6xl hidden md:block w-fit uppercase font-bold drop-shadow-[0px_0px_1px_#242424]">
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
