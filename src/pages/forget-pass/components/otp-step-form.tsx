import { Controller, useFormContext } from "react-hook-form";
import type { ForgetPassFormInputs } from "../types/forget-pass-inputs";
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

type OtpStepFormProps = {
  setFormStep: React.Dispatch<React.SetStateAction<ForgetPassFormStepsType>>;
  timeRemaining: number;
};

export default function OtpStepForm({
  setFormStep,
  timeRemaining,
}: OtpStepFormProps) {
  // Hooks
  const { mutate, isPending, error } = useVerifyCode();
  const { mutate: sendCode } = useForgetPass();

  // Form
  const {
    getValues,
    trigger,
    control,
    formState: { errors },
  } = useFormContext<ForgetPassFormInputs>();

  // Handlers
  const handleClick = async () => {
    const isValid = await trigger("otp"); // ← validate otp field only
    if (!isValid) return;

    const otp = getValues("otp");

    mutate(otp, {
      onSuccess: () => {
        toast.success("Code Verified successfully");
        setFormStep(FORGET_PASS_STEPS.NEW_PASS);
        localStorage.removeItem(AFTER_TIME_KEY);
      },
    });
  };

  const handleResendClick = () => {
    const email = getValues("email");

    sendCode(email, {
      onSuccess: () => toast.success("Code Resend Successfully !"),
    });
  };

  return (
    <>
      {/* Form Label */}
      <Label
        htmlFor="otp-code-form"
        className="text-center text-white text-2xl font-baloo-thambi font-normal mx-auto"
      >
        Enter the OTP you have received
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
          <div className="error-message bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-baloo-thambi rounded-xl p-3 flex items-center gap-2.5 shadow-sm animate-in fade-in slide-in-from-top-2">
            <AlertCircle size={18} className="shrink-0" />
            <p className="leading-tight">
              {errors.otp?.message || error?.message}
            </p>
          </div>
        )}

        {/* Confirm Button */}
        <Button
          className="font-baloo-thambi bg-primary rounded-full font-extrabold text-base text-white py-2 px-4 w-full"
          type="button"
          disabled={isPending}
          onClick={handleClick}
        >
          Confirm
        </Button>
      </div>

      {/* Didn't receive code */}
      <p className="mt-4 text-center flex flex-col items-center font-baloo-thambi">
        {/* Text */}
        <span className="text-white capitalize">
          didn’t receive verification code?
        </span>

        {/* Resend Button OR Remaining Seconds */}
        {/* Use key prop in RemainingSeconds Component to re-create a new component with a new state ( seconds ) */}
        {timeRemaining > 0 && (
          <RemainingSeconds
            seconds={timeRemaining}
            key={timeRemaining}
            handleClick={handleResendClick}
          />
        )}
      </p>
    </>
  );
}
