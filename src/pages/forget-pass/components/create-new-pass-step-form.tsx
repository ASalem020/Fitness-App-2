import { useForm, type SubmitHandler } from "react-hook-form";
import type { NewPasswordFormType } from "../types/forget-pass-inputs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AlertCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordSchema } from "../schema/forget-pass.schema";
import { FORGET_PASS_EMAIL_KEY } from "../constants/forget-pass.constant";
import { useNavigate } from "react-router-dom";
import useCreateNewPass from "../hooks/use-create-new-pass";
import { toast } from "sonner";

type CreateNewPassStepFormProps = {
  email: string;
};

export default function CreateNewPassStepForm({
  email,
}: CreateNewPassStepFormProps) {
  // Navigation
  const navigate = useNavigate();

  // Hooks
  const { mutate, isPending, error } = useCreateNewPass();

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordFormType>({
    defaultValues: {
      "new-password": "",
      "confirm-pass": "",
    },
    mode: "onTouched",
    resolver: zodResolver(newPasswordSchema),
  });

  // Functions
  const onSubmit: SubmitHandler<NewPasswordFormType> = async (data) => {
    const fullData = {
      email,
      newPassword: data["new-password"],
    };

    mutate(fullData, {
      onSuccess: () => {
        toast.success("New Password Created Successfully !");
        localStorage.removeItem(FORGET_PASS_EMAIL_KEY);
        navigate("/login");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 items-center min-w-[25.375rem]"
    >
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
          disabled={isPending}
        >
          {isPending ? (
            <span className="animate-pulse">Creating ...</span>
          ) : (
            "Create New Password"
          )}
        </Button>
      </div>
    </form>
  );
}
