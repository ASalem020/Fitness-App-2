import { useFormContext } from "react-hook-form";
import type { ForgetPassFormInputs } from "../types/forget-pass-inputs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

type CreateNewPassStepFormProps = {
    isLoading: boolean;
    error: Error | null
}

export default function CreateNewPassStepForm({isLoading,error}: CreateNewPassStepFormProps) {
  // Form
  const {
    register,
    formState: { errors },
  } = useFormContext<ForgetPassFormInputs>();


  return (
    <>
      {/* Form Label */}
      <Label
        htmlFor="new-pass"
        className="text-center text-white text-2xl font-baloo-thambi font-normal mx-auto"
      >
        Make sure to create a strong password!
      </Label>

      {/* Input & Button */}
      <div className="mt-6 input-and-button flex flex-col items-center gap-6 w-[19.4375rem] mx-auto">
        <div className="inputs flex flex-col items-center gap-2 w-full h-">
          {/* New Pass Input */}
          <Input
            startIcon={<Lock className="h-5 w-5 text-gray-300" />}
            placeholder="Password"
            type="password"
            id="new-pass"
            className="text-gray-300 font-baloo-thambi"
            {...register("new-password")}
          />

          {/* Confirm Pass Input */}
          <Input
            startIcon={<Lock className="h-5 w-5 text-gray-300" />}
            placeholder="Confirm Password"
            type="password"
            className="text-gray-300 font-baloo-thambi"
            {...register("confirm-pass")}
          />
        </div>

        {/* Error Message Box */}
        {(errors["new-password"]?.message ||
          errors["confirm-pass"]?.message ||
          error?.message) && (
          <div className="error-message bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-baloo-thambi rounded-xl p-3 flex items-center gap-2.5 shadow-sm animate-in fade-in slide-in-from-top-2">
            <AlertCircle size={18} className="shrink-0" />
            <p className="leading-tight">
              {errors["new-password"]?.message ||
                errors["confirm-pass"]?.message ||
                error?.message}
            </p>
          </div>
        )}

        {/* Confirm Button */}
        <Button
          className="font-baloo-thambi bg-primary rounded-full font-extrabold text-base text-white py-2 px-4 w-full"
          type="submit"
          disabled={isLoading}
        >
          Create New Password
        </Button>
      </div>
    </>
  );
}
