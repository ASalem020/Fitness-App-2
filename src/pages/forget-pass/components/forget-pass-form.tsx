import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import type { ForgetPassFormInputs } from "../types/forget-pass-inputs";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgetPassSchema } from "../schema/forget-pass.schema";
import EmailStepForm from "./email-step-form";
import OtpStepForm from "./otp-step-form";
import type { ForgetPassFormStepsType } from "../types/forget-pass-form-steps";
import { FORGET_PASS_STEPS } from "../constants/forget-pass.constant";
import CreateNewPassStepForm from "./create-new-pass-step-form";
import useCreateNewPass from "../hooks/use-create-new-pass";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type ForgetPassFormProps = {
  currentStep: ForgetPassFormStepsType;
  setStep: React.Dispatch<React.SetStateAction<ForgetPassFormStepsType>>;
};

export default function ForgetPassForm({
  currentStep,
  setStep,
}: ForgetPassFormProps) {
  // Navigation
  const navigate = useNavigate();

  // Hooks
  const { mutate, isPending, error } = useCreateNewPass();

  // Forms
  const form = useForm<ForgetPassFormInputs>({
    defaultValues: {
      email: "",
      otp: "",
      "new-password": "",
      "confirm-pass": "",
    },
    resolver: zodResolver(forgetPassSchema),
    mode: "onTouched",
  });

  // Functions
  const onSubmit: SubmitHandler<ForgetPassFormInputs> = async (data) => {
    if (currentStep !== FORGET_PASS_STEPS.NEW_PASS) return;

    const fullData = {
      email: data["email"],
      newPassword: data["new-password"],
    };

    mutate(fullData, {
      onSuccess: () => {
        toast.success("New Password Created Successfully !");
        navigate("/login");
      },
    });
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 items-center min-w-[25.375rem]"
      >
        {/* Email Step */}
        {currentStep === FORGET_PASS_STEPS.EMAIL && (
          <EmailStepForm setFormStep={setStep} />
        )}

        {/* OTP Step */}
        {currentStep === FORGET_PASS_STEPS.OTP && (
          <OtpStepForm setFormStep={setStep} />
        )}

        {/* OTP Step */}
        {currentStep === FORGET_PASS_STEPS.NEW_PASS && (
          <CreateNewPassStepForm isLoading={isPending} error={error} />
        )}
      </form>
    </FormProvider>
  );
}
