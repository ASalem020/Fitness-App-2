import { useFormContext } from "react-hook-form";
import type { ForgetPassFormInputs } from "../types/forget-pass-inputs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import type { ForgetPassFormStepsType } from "../types/forget-pass-form-steps";
import useForgetPass from "../hooks/use-forget-pass";
import {
  AFTER_TIME_KEY,
  FORGET_PASS_EMAIL_KEY,
  FORGET_PASS_STEPS,
} from "../constants/forget-pass.constant";

type EmailStepFormProps = {
  setFormStep: React.Dispatch<React.SetStateAction<ForgetPassFormStepsType>>;
};

export default function EmailStepForm({ setFormStep }: EmailStepFormProps) {
  // Mutations
  const { mutate, isPending, error } = useForgetPass();

  // Form
  const {
    register,
    getValues,
    trigger,
    formState: { errors },
  } = useFormContext<ForgetPassFormInputs>();

  // Handlers
  const handleClick = async () => {
    const isValid = await trigger("email");
    if (!isValid) return;

    const email = getValues("email");
    // If was one save , other one sure it saved because these was saved together
    const savedEmail = localStorage.getItem(FORGET_PASS_EMAIL_KEY);
    const savedDate = localStorage.getItem(AFTER_TIME_KEY);
    const now = new Date().getTime();
    const isEmailAndDateSaved = savedEmail || savedDate;

    // Check if any data saved to Reduce Network Requests
    if (isEmailAndDateSaved) {
      if (savedEmail === email && now <= Number(savedDate))
        return setFormStep(FORGET_PASS_STEPS.OTP);
    }

    mutate(email, {
      onSuccess: () => {
        // Variables
        const afterTime = new Date().getTime() + 60000;

        toast.success("Code sent successfully");
        localStorage.setItem(FORGET_PASS_EMAIL_KEY, email);
        localStorage.setItem(AFTER_TIME_KEY, String(afterTime));

        setFormStep(FORGET_PASS_STEPS.OTP);
      },
    });
  };

  return (
    <>
      {/* Form Label */}
      <Label
        htmlFor="forget-pass-input"
        className="text-center text-white text-2xl font-baloo-thambi font-normal mx-auto"
      >
        Enter Your Email
      </Label>

      {/* Input & Button */}
      <div className="input-and-button flex flex-col gap-6 w-[19.4375rem] mx-auto">
        {/* Input */}
        <Input
          id="forget-pass-input"
          startIcon={<Mail className="h-5 w-5 text-gray-300" />}
          placeholder="Email"
          type="email"
          {...register("email")}
          autoComplete="email"
          className="text-gray-300 font-baloo-thambi"
        />

        {/* Error Message Box */}
        {(errors.email || error) && (
          <div className="error-message bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-baloo-thambi rounded-xl p-3 flex items-center gap-2.5 shadow-sm animate-in fade-in slide-in-from-top-2">
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <p className="leading-tight">
              {errors?.email?.message || error?.message}
            </p>
          </div>
        )}

        {/* Button */}
        <Button
          className="font-baloo-thambi bg-[#FF4100] rounded-full font-extrabold text-base text-white py-2 px-4"
          type="button"
          onClick={handleClick}
          disabled={isPending}
        >
          Sent OTP
        </Button>
      </div>
    </>
  );
}
