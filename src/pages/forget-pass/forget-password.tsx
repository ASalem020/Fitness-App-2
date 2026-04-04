import FormContainer from "@/components/shared/form-container";
import ForgetPassForm from "./components/forget-pass-form";
import { FORGET_PASS_STEPS } from "./constants/forget-pass.constant";
import type { ForgetPassFormStepsType } from "./types/forget-pass-form-steps";
import { useState } from "react";
import { useTranslations } from "use-intl";

export default function ForgetPassword() {
  // Translation
  const t = useTranslations("forget-pass.email-step");

  // States
  const [forgetFormSteps, setForgetFormSteps] =
    useState<ForgetPassFormStepsType>(FORGET_PASS_STEPS.EMAIL);

  // Variables
  const FormTitle: string =
    forgetFormSteps === FORGET_PASS_STEPS.EMAIL
      ? t("title")
      : forgetFormSteps === FORGET_PASS_STEPS.OTP
        ? "OTP CODE"
        : forgetFormSteps === FORGET_PASS_STEPS.NEW_PASS
          ? "create new password"
          : t("title");

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
