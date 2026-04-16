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

function getInitialTimeRemaining() {
  const storedTime = Number(localStorage.getItem(AFTER_TIME_KEY));
  if (!storedTime || isNaN(storedTime)) return 60;
  const seconds = (storedTime - new Date().getTime()) / 1000;
  return seconds > 0 ? Math.floor(seconds) : 60;
}

export default function ForgetPassForm({
  currentStep,
  setStep,
}: ForgetPassFormProps) {
  // States
  const [shardData, setSharedData] = useState({
    email: "",
  });
  const [timeRemaining, setTimeRemaining] = useState<number>(
    getInitialTimeRemaining,
  );

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
          timeRemaining={timeRemaining}
          setTimeRemaining={setTimeRemaining}
        />
      )}

      {/* OTP Step */}
      {currentStep === FORGET_PASS_STEPS.NEW_PASS && (
        <CreateNewPassStepForm email={shardData.email} />
      )}
    </>
  );
}
