import { FormProvider, useForm } from "react-hook-form";
import type { ForgetPassFormInputs } from "../types/forget-pass-inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetPassSchema } from "../schema/forget-pass.schema";
import EmailStepForm from "./email-step-form";
import OtpStepForm from "./otp-step-form";
import type { ForgetPassFormStepsType } from "../types/forget-pass-form-steps";
import { FORGET_PASS_STEPS } from "../constants/forget-pass.constant";

type ForgetPassFormProps = {
  currentStep: string;
  setStep: React.Dispatch<React.SetStateAction<ForgetPassFormStepsType>>;
};

export default function ForgetPassForm({
  currentStep,
  setStep,
}: ForgetPassFormProps) {
  // Forms
  const form = useForm<ForgetPassFormInputs>({
    mode: "all",
    defaultValues: {
      email: "",
      otp: "",
    },
    resolver: zodResolver(forgetPassSchema),
  });

  return (
    <FormProvider {...form}>
      {/* Email Step */}
      {currentStep === FORGET_PASS_STEPS.EMAIL && (
        <EmailStepForm setFormStep={setStep} />
      )}

      {/* OTP Step */}
      {currentStep === FORGET_PASS_STEPS.OTP && (
        <OtpStepForm setFormStep={setStep} />
      )}
    </FormProvider>
  );
}
