import { Sparkle } from "lucide-react";

export default function ScrollingTicker() {
  // variable
  const scrollingTicker = [
    "outdoor & online trainers",
    "personal training",
    "live classes",
  ];
  return (
    <div className="bg-[#FF4100] flex items-center overflow-hidden h-20 whitespace-nowrap w-full">
      <div className="flex animate-ticker items-center w-max font-inter">
        {Array(4)
          .fill(scrollingTicker)
          .flat()
          .map((item, index) => (
            <div className="flex items-center gap-8 pr-8" key={index}>
              <p className="uppercase text-2xl font-bold text-white">{item}</p>
              <Sparkle fill="white" stroke="none" width={26} height={26} />
            </div>
          ))}
      </div>
    </div>
  );
}
