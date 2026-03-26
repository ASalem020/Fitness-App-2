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
import { FORGET_PASS_STEPS } from "../constants/forget-pass.constant";
import type { ForgetPassFormStepsType } from "../types/forget-pass-form-steps";

type OtpStepFormProps = {
  setFormStep: React.Dispatch<React.SetStateAction<ForgetPassFormStepsType>>;
};

export default function OtpStepForm({ setFormStep }: OtpStepFormProps) {
  // Hooks
  const { mutate, isPending, error } = useVerifyCode();

  // Form
  const { setError, getValues, control } =
    useFormContext<ForgetPassFormInputs>();

  // Handlers
  const handleClick = () => {
    const otp = getValues("otp");

    if (!otp)
      return setError("otp", { message: "Please enter a valid otp code !" });

    mutate(otp, {
      onSuccess: () => {
        toast.success("Code Verified successfully");
        setFormStep(FORGET_PASS_STEPS.NEW_PASS);
      },
    });
  };

  return (
    <form className="otp-code-form flex flex-col gap-2 items-center min-w-[25.375rem]">
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
        {error && (
          <div className="error-message bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-baloo-thambi rounded-xl p-3 flex items-center gap-2.5 shadow-sm animate-in fade-in slide-in-from-top-2">
            <AlertCircle size={18} className="shrink-0" />
            <p className="leading-tight">{error.message}</p>
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

        {/* Button */}
        <Button
          variant={"link"}
          className="underline py-1 text-base h-auto hover:text-orange-700"
        >
          Resend Code
        </Button>
      </p>
    </form>
  );
}
