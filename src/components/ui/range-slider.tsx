import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils/tailwind-merge";

export interface RangeSliderProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  label?: string;
  onChange?: (val: number) => void;
}

export function RangeSlider({
  min = 16,
  max = 100,
  defaultValue = 25,
  label = "Units",
  onChange,
}: RangeSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    loop: false,
    align: "center",
    containScroll: false,
    dragFree: true,
  });

  const clampDefault = Math.max(min, Math.min(defaultValue, max));
  const [selectedIndex, setSelectedIndex] = useState(clampDefault - min);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    // Calculate exact physical center instead of target snap
    // Embla scrollProgress goes strictly from 0 (first item) to 1 (last item) with align: 'center'
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    const maxIndex = max - min;
    const currentIndex = Math.round(progress * maxIndex);

    setSelectedIndex((prev) => {
      if (prev !== currentIndex) {
        onChange?.(currentIndex + min);
        return currentIndex;
      }
      return prev;
    });
  }, [emblaApi, max, min, onChange]);

  const onSettle = useCallback(() => {
    if (!emblaApi) return;
    // Always snap cleanly to the closest integer target when momentum comes to a complete halt
    emblaApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Bind scroll and settle events
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("scroll", onScroll);
    emblaApi.on("settle", onSettle);
    emblaApi.on("reInit", onScroll);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("settle", onSettle);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll, onSettle]);

  // Initialize default position once
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(clampDefault - min, true);
  }, [emblaApi, clampDefault, min]);

  const values = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div
      dir="ltr"
      className="flex w-full flex-col items-center justify-center space-y-4 py-8 select-none"
    >
      <div className="text-sm font-semibold text-primary uppercase tracking-wider">
        {label}
      </div>
      <div
        className="relative w-full max-w-sm overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        ref={emblaRef}
      >
        <div className="flex touch-pan-x items-center py-4">
          {values.map((val, index) => {
            const distance = Math.abs(selectedIndex - index);

            // Smoothly stepping scale sizes based on distance from center
            let scaleClass = "text-xl text-muted-foreground opacity-60";
            if (distance === 0) {
              scaleClass = "text-5xl text-primary";
            } else if (distance === 1) {
              scaleClass = "text-3xl text-foreground";
            } else if (distance === 2) {
              scaleClass = "text-2xl text-muted-foreground opacity-80";
            }

            return (
              <div
                key={val}
                className="flex w-20 shrink-0 cursor-pointer items-center justify-center transition-all duration-200 text-white"
                onClick={() => emblaApi?.scrollTo(index)}
              >
                <span
                  className={cn(
                    "font-bold transition-all duration-200 transform",
                    scaleClass,
                  )}
                >
                  {val}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-0 w-0 border-x-[8px] border-x-transparent border-b-[12px] border-b-primary" />
    </div>
  );
}
