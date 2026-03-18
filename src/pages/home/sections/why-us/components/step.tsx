import { cn } from "@/lib/utils/tailwind-merge";

type StepProps = {
  isEnd?: boolean;
  num: number;
};

export default function Step({ isEnd, num }: StepProps) {
  return (
    <div
      className={cn(
        "step relative size-14 flex items-center justify-center text-xs bg-[#FF4100] text-[#F3F3F4] border border-[#24242424] rounded-full font-bold",
        !isEnd &&
          "before:absolute before:w-0.5 before:h-20 before:top-full before:left-1/2 before:-translate-x-1/2 before:bg-dashed-border dark:before:bg-dashed-border-dark",
      )}
    >
      {num.toString().padStart(2, "0")}
    </div>
  );
}
