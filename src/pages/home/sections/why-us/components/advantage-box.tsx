import Step from "./step";

type AdvantageBoxProps = {
  stepNum: number;
  isEndStep?: boolean;
  advantageTitle: string;
  advantageSubTitle: string;
};

export default function AdvantageBox({
  stepNum,
  isEndStep,
  advantageTitle,
  advantageSubTitle,
}: AdvantageBoxProps) {
  return (
    <div className="advantage-box flex items-center gap-6">
      {/* Step */}
      <Step num={stepNum} isEnd={isEndStep} />

      {/* Advantage Text */}
      <div className="text text-[#242424] dark:text-[#F3F3F4]">
        {/* Title */}
        <h5 className="font-inter mb-2 font-bold text-lg capitalize">
          {advantageTitle}
        </h5>

        {/* Sub Title */}
        <p className="font-rubik md:max-w-[33.625rem]">{advantageSubTitle}</p>
      </div>
    </div>
  );
}
