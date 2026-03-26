import type { RegisterFormValues } from "@/lib/types/register";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { useState } from "react";
import { cn } from "@/lib/utils/tailwind-merge";
import { Button } from "@/components/ui/button";
import GenderStep from "./KYC steps/gender-step";

interface props {
  registerValues: RegisterFormValues;
}

export default function KYC({ registerValues }: props) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGender, setSelectedGender] = useState<string>("");

  console.log(registerValues);

  const handleNext = () => {
    // Only proceed if gender is selected on Step 1
    if (currentStep === 1 && !selectedGender) return;

    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const isButtonDisabled = currentStep === 1 && !selectedGender;

  return (
    <div className="font-baloo-thambi flex flex-col items-center">
      {/* Progress Circle container */}
      <div className="mb-2">
        <ProgressCircle
          value={(currentStep / 6) * 100}
          size={64}
          strokeWidth={2}
          progressClassName="text-orange-600"
        >
          <span className="text-xl font-medium text-white">
            {currentStep}/6
          </span>
        </ProgressCircle>
      </div>

      {currentStep === 1 && (
        <GenderStep
          selectedGender={selectedGender}
          onGenderChange={setSelectedGender}
        />
      )}

      {/* Next button */}
      <Button
        onClick={handleNext}
        disabled={isButtonDisabled}
        className={cn(
          "h-10 w-full max-w-80 rounded-full text-white px-4 py-2 font-black transition-all duration-300",
          isButtonDisabled
            ? "bg-[#D3D3D3]"
            : "bg-orange-600 hover:bg-orange-500",
        )}
      >
        Next
      </Button>
    </div>
  );
}
