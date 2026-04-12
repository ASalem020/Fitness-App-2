import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import type { OTPStepFormType } from "../types/forget-pass-inputs";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useVerifyCode from "../hooks/use-verify-code";
import { toast } from "sonner";
import {
  AFTER_TIME_KEY,
  FORGET_PASS_STEPS,
} from "../constants/forget-pass.constant";
import type { ForgetPassFormStepsType } from "../types/forget-pass-form-steps";
import RemainingSeconds from "./remaining-seconds";
import useForgetPass from "../hooks/use-forget-pass";
import { zodResolver } from "@hookform/resolvers/zod";
import { createOtpStepSchema } from "../schema/forget-pass.schema";
import { useTranslations } from "use-intl";
import { useState } from "react";

type OtpStepFormProps = {
  setFormStep: React.Dispatch<React.SetStateAction<ForgetPassFormStepsType>>;
  timeRemaining: number;
  email: string;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
};

export default function OtpStepForm({
  setFormStep,
  timeRemaining,
  email,
  setTimeRemaining,
}: OtpStepFormProps) {
  // Translations
  const t = useTranslations("forget-pass.otp-step");

  // Hooks
  const { mutate, isPending, error } = useVerifyCode();
  const { mutate: sendCode } = useForgetPass();

  // Remount RemainingSeconds on each resend; parent timeRemaining often stays 60
  // because it is not decremented during the local countdown, so key={timeRemaining} alone does not reset.
  const [resendTimerKey, setResendTimerKey] = useState(0);

  // Form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPStepFormType>({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(createOtpStepSchema(t)),
    mode: "onTouched",
  });

  // Handlers
  const onSubmit: SubmitHandler<OTPStepFormType> = async (data) => {
    mutate(data.otp, {
      onSuccess: () => {
        toast.success(t("code-verified"));
        setFormStep(FORGET_PASS_STEPS.NEW_PASS);
        localStorage.removeItem(AFTER_TIME_KEY);
      },
    });
  };

  const handleResendClick = () => {
    sendCode(email, {
      onSuccess: () => toast.success(t("code-resend")),
    });
    localStorage.setItem(AFTER_TIME_KEY, String(new Date().getTime() + 60000));
    setTimeRemaining(60);
    setResendTimerKey((k) => k + 1);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 items-center min-w-[25.375rem]"
    >
      {/* Form Label */}
      <Label
        htmlFor="otp-code-form"
        className="text-center text-white text-2xl font-normal mx-auto"
      >
        {t("form-title")}
      </Label>

      {/* Input & Button */}
      <div className="mt-6 input-and-button flex flex-col items-center gap-6 w-[19.4375rem] mx-auto">
        {/* Input */}
        <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <InputOTP {...field} className="mx-auto">
              <InputOTPGroup className="gap-4">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}
        />

        {/* Error Message Box */}
        {(errors.otp || error) && (
          <div className="error-message bg-red-500/10 border border-red-500/50 text-red-500 text-sm rounded-xl p-3 flex items-center gap-2.5 shadow-sm animate-in fade-in slide-in-from-top-2 font-baloo-thambi rtl:font-tajawal">
            <AlertCircle size={18} className="shrink-0" />
            <p className="leading-tight">
              {errors.otp?.message || error?.message}
            </p>
          </div>
        )}

        {/* Confirm Button */}
        <Button
          className="bg-primary rounded-full font-extrabold text-base text-white py-2 px-4 w-full"
          disabled={isPending}
        >
          {isPending ? (
            <span className="animate-pulse">{t("check-code")} ...</span>
          ) : (
            t("confirm")
          )}
        </Button>
      </div>

      {/* Didn't receive code */}
      <p className="mt-4 text-center flex flex-col items-center font-baloo-thambi rtl:font-tajawal">
        {/* Text */}
        <span className="text-white capitalize">{t("resend-message")}</span>

        {/* Resend Button OR Remaining Seconds */}
        {timeRemaining > 0 && (
          <RemainingSeconds
            text={t("resend")}
            seconds={timeRemaining}
            key={resendTimerKey}
            handleClick={handleResendClick}
          />
        )}
      </p>
    </form>
  );
}
