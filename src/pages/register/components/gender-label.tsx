import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils/tailwind-merge";
import type { LucideIcon } from "lucide-react";

interface props {
  value: string;
  selectedGender: string;
  icon: LucideIcon;
  label: string;
}

export default function GenderLabel({
  value,
  selectedGender,
  icon: Icon,
  label,
}: props) {
  const isSelected = selectedGender === value;

  return (
    <div>
      <Label
        htmlFor={value}
        className={cn(
          "relative flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-full border-2 transition-all duration-500",
          isSelected
            ? "border-orange-500"
            : "hover:border-white/40 hover:bg-white/5",
        )}
      >
        <RadioGroupItem value={value} id={value} className="sr-only" />
        <Icon
          className={cn(
            "h-12 w-9 transition-all duration-500",
            isSelected ? "scale-110 text-orange-500" : "text-white/80",
          )}
          strokeWidth={1.5}
        />
        <span
          className={cn(
            "font-semibold capitalize transition-colors duration-300",
            isSelected ? "text-orange-500" : "text-white",
          )}
        >
          {label}
        </span>
      </Label>
    </div>
  );
}
