import { useFormContext, type SubmitHandler } from "react-hook-form";
import type { ForgetPassFormInputs } from "../types/forget-pass-inputs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import type { ForgetPassFormSteps } from "../types/forget-pass-form-steps";
import useForgetPass from "../hooks/use-forget-pass";

type EmailStepFormProps = {
  setFormStep: React.Dispatch<React.SetStateAction<ForgetPassFormSteps>>;
};

export default function EmailStepForm({ setFormStep }: EmailStepFormProps) {
  // Mutations
  const { mutate, isPending, error } = useForgetPass();

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ForgetPassFormInputs>();

  // Handlers
  const onSubmit: SubmitHandler<ForgetPassFormInputs> = (data) =>
    mutate(data.email, {
      onSuccess: () => {
        toast.success("Code sent successfully");
        setFormStep("otp");
      },
    });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="forget-password-form flex flex-col gap-2 items-center min-w-[25.375rem]"
    >
      {/* Form Label */}
      <Label
        htmlFor="forget-pass-input"
        className="text-center text-white text-2xl font-baloo-thambi font-normal mx-auto"
      >
        Enter Your Email
      </Label>

      {/* Input & Button */}
      <div className="input-and-button flex flex-col gap-6 w-[19.4375rem] mx-auto">
        {/* Input Container */}
        <div className="input-container flex items-center gap-2.5 text-gray-300 py-2 px-4 rounded-3xl border border-gray-300">
          {/* Icon */}
          <Mail size={20} />
          {/* Input */}
          <Input
            type="text"
            placeholder="Email"
            className="bg-transparent border-none !p-0 focus-visible:ring-0 font-baloo-thambi text-sm"
            {...register("email", { required: "Email is required" })}
            autoComplete="email"
          />
        </div>

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
          type="submit"
          disabled={isPending}
        >
          Sent OTP
        </Button>
      </div>
    </form>
  );
}
