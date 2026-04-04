import FormContainer from "@/components/shared/form-container";
import ForgetPassForm from "./components/forget-pass-form";
import { FORGET_PASS_STEPS } from "./constants/forget-pass.constant";
import type { ForgetPassFormStepsType } from "./types/forget-pass-form-steps";
import { useState } from "react";
import { useTranslations } from "use-intl";

export default function ForgetPassword() {
  // Translation
  const t = useTranslations("forget-pass");

  // States
  const [forgetFormSteps, setForgetFormSteps] =
    useState<ForgetPassFormStepsType>(FORGET_PASS_STEPS.NEW_PASS);

  // Variables
  const FormTitle: string =
    forgetFormSteps === FORGET_PASS_STEPS.EMAIL
      ? t("email-step.title")
      : forgetFormSteps === FORGET_PASS_STEPS.OTP
        ? t("otp-step.title")
        : forgetFormSteps === FORGET_PASS_STEPS.NEW_PASS
          ? t("new-pass-step.title")
          : t("email-step.title");

  return (
    <main>
      {/* Form Container */}
      {/* Reusable Form Component */}
      <FormContainer
        title={FormTitle}
        formComponent={
          <ForgetPassForm
            currentStep={forgetFormSteps}
            setStep={setForgetFormSteps}
          />
        }
      />
    </main>
  );
}
