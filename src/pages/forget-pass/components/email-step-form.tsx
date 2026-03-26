import { useFormContext } from "react-hook-form";
import type { ForgetPassFormInputs } from "../types/forget-pass-inputs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import type { ForgetPassFormStepsType } from "../types/forget-pass-form-steps";
import useForgetPass from "../hooks/use-forget-pass";
import { FORGET_PASS_STEPS } from "../constants/forget-pass.constant";

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
    setError,
    formState: { errors },
  } = useFormContext<ForgetPassFormInputs>();

  // Handlers
  const handleClick = () => {
    const email = getValues("email");

    if (!email)
      return setError("email", { message: "Please enter a valid email !" });

    mutate(email, {
      onSuccess: () => {
        toast.success("Code sent successfully");
        setFormStep(FORGET_PASS_STEPS.OTP);
      },
    });
  };

  return (
    <form className="forget-password-form flex flex-col gap-2 items-center min-w-[25.375rem]">
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
          {...register("email", { required: "Email is required" })}
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
    </form>
  );
}
