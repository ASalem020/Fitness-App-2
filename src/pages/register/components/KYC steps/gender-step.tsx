import { RadioGroup } from "@/components/ui/radio-group";
import { Mars, Venus } from "lucide-react";
import GenderLabel from "../gender-label";

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
      <h1 className="mb-2 text-center text-4xl font-extrabold uppercase  text-white md:text-5xl">
        TELL US ABOUT YOURSELF!
      </h1>
      <p className="mb-4 text-center text-lg capitalize  text-gray-200 opacity-90">
        we need to now your gender
      </p>

      {/* Gender Selection using Radio Group */}
      <RadioGroup
        value={selectedGender}
        onValueChange={onGenderChange}
        className="mb-6 flex items-center justify-center gap-12"
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
