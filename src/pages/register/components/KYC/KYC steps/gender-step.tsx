import { RadioGroup } from "@/components/ui/radio-group";
import { Mars, Venus } from "lucide-react";
import GenderLabel from "../../gender-label";
import KycHeader from "./KYC-header";

interface GenderStepProps {
  selectedGender: string;
  onGenderChange: (value: string) => void;
}

export default function GenderStep({
  selectedGender,
  onGenderChange,
}: GenderStepProps) {
  return (
    <div>
      {/* Hero Text */}
      <KycHeader
        title="TELL US ABOUT YOURSELF!"
        subtitle="we need to now your gender"
      />

      {/* Gender Selection using Radio Group */}
      <RadioGroup
        // value={selectedGender}
        onValueChange={onGenderChange}
        className="mt-8 mb-6 flex items-center justify-center gap-12"
      >
        {/* Male option */}
        <GenderLabel
          value="male"
          selectedGender={selectedGender}
          icon={Mars}
          label="male"
        />

        {/* Female option */}
        <GenderLabel
          value="female"
          selectedGender={selectedGender}
          icon={Venus}
          label="female"
        />
      </RadioGroup>
    </div>
  );
}
