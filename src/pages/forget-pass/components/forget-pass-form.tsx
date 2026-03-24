import { FormProvider, useForm } from "react-hook-form";
import type { ForgetPassFormInputs } from "../types/forget-pass-inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetPassSchema } from "../schema/forget-pass.schema";
import { useState } from "react";
import EmailStepForm from "./email-step-form";
import OtpStepForm from "./otp-step-form";
import type { ForgetPassFormSteps } from "../types/forget-pass-form-steps";

export default function ForgetPassForm() {
  // States
  const [forgetFormSteps, setForgetFormSteps] =
    useState<ForgetPassFormSteps>("email");

  // Forms
  const form = useForm<ForgetPassFormInputs>({
    mode: "all",
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgetPassSchema),
  });

  return (
    <FormProvider {...form}>
      {/* Email Step */}
      {forgetFormSteps === "email" && (
        <EmailStepForm setFormStep={setForgetFormSteps} />
      )}

      {/* OTP Step */}
      {forgetFormSteps === "otp" && <OtpStepForm />}
    </FormProvider>
  );
}
