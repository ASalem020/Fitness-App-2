import EmailStepForm from "./email-step-form";
import OtpStepForm from "./otp-step-form";
import type { ForgetPassFormStepsType } from "../types/forget-pass-form-steps";
import {
  AFTER_TIME_KEY,
  FORGET_PASS_STEPS,
} from "../constants/forget-pass.constant";
import CreateNewPassStepForm from "./create-new-pass-step-form";
import { useState } from "react";

type ForgetPassFormProps = {
  currentStep: ForgetPassFormStepsType;
  setStep: React.Dispatch<React.SetStateAction<ForgetPassFormStepsType>>;
};

export default function ForgetPassForm({
  currentStep,
  setStep,
}: ForgetPassFormProps) {
  // States
  const [shardData, setSharedData] = useState({
    email: "",
  });

  return (
    <>
      {/* Email Step */}
      {currentStep === FORGET_PASS_STEPS.EMAIL && (
        <EmailStepForm setFormStep={setStep} setSharedData={setSharedData} />
      )}

      {/* OTP Step */}
      {currentStep === FORGET_PASS_STEPS.OTP && (
        <OtpStepForm
          email={shardData.email}
          setFormStep={setStep}
          timeRemaining={Number(
            (
              (Number(localStorage.getItem(AFTER_TIME_KEY)) -
                new Date().getTime()) /
              1000
            ).toFixed(),
          )}
        />
      )}

      {/* OTP Step */}
      {currentStep === FORGET_PASS_STEPS.NEW_PASS && (
        <CreateNewPassStepForm email={shardData.email} />
      )}
    </>
  );
}
