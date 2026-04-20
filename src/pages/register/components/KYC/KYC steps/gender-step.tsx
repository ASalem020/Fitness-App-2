import { RadioGroup } from "@/components/ui/radio-group";
import { Mars, Venus } from "lucide-react";
import GenderLabel from "../../gender-label";
import { useTranslations } from "use-intl";
import KycHeader from "./kyc-header";

interface GenderStepProps {
  selectedGender: string;
  onGenderChange: (value: string) => void;
}

export default function GenderStep({
  selectedGender,
  onGenderChange,
}: GenderStepProps) {
  // Translations
  const t = useTranslations("kyc.genderStep");
  return (
    <div>
      {/* Hero Text */}
      <KycHeader title={t("title")} subtitle={t("description")} />

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
          label={t("male")}
        />

        {/* Female option */}
        <GenderLabel
          value="female"
          selectedGender={selectedGender}
          icon={Venus}
          label={t("female")}
        />
      </RadioGroup>
    </div>
  );
}
