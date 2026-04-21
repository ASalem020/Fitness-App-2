import { useForm, type SubmitHandler } from "react-hook-form";
import type { EmailStepFormType } from "../types/forget-pass-inputs";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "use-intl";
import { createEmailStepSchema } from "../schema/forget-pass.schema";

type EmailStepFormProps = {
  setFormStep: React.Dispatch<React.SetStateAction<ForgetPassFormStepsType>>;
  setSharedData: React.Dispatch<React.SetStateAction<{ email: string }>>;
};

export default function EmailStepForm({
  setFormStep,
  setSharedData,
}: EmailStepFormProps) {
  // Translations
  const t = useTranslations("forget-pass.email-step");

  // Mutations
  const { mutate, isPending, error } = useForgetPass();

  // Form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EmailStepFormType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(createEmailStepSchema(t)),
    mode: "onTouched",
  });

  // Handlers
  const onSubmit: SubmitHandler<EmailStepFormType> = async (data) => {
    // If was one save , other one sure it saved because these was saved together
    const savedEmail = localStorage.getItem(FORGET_PASS_EMAIL_KEY);
    const savedDate = localStorage.getItem(AFTER_TIME_KEY);
    const now = new Date().getTime();
    const isEmailAndDateSaved = savedEmail || savedDate;

    // Check if any data saved to Reduce Network Requests
    if (isEmailAndDateSaved) {
      if (savedEmail === data.email && now <= Number(savedDate))
        return setFormStep(FORGET_PASS_STEPS.OTP);
    }

    mutate(data.email, {
      onSuccess: () => {
        // Variables
        const afterTime = new Date().getTime() + 60000;

        toast.success(t("code-sent"));
        localStorage.setItem(FORGET_PASS_EMAIL_KEY, data.email);
        localStorage.setItem(AFTER_TIME_KEY, String(afterTime));

        setSharedData((prev) => {
          return { ...prev, email: data.email };
        });
        setFormStep(FORGET_PASS_STEPS.OTP);
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
        htmlFor="forget-pass-input"
        className="text-center text-white text-2xl font-normal mx-auto"
      >
        {t("form-title")}
      </Label>

      {/* Input & Button */}
      <div className="input-and-button flex flex-col gap-6 w-[19.4375rem] mx-auto">
        {/* Input */}
        <Input
          id="forget-pass-input"
          startIcon={<Mail className="h-5 w-5 text-gray-300" />}
          placeholder={t("input-placeholder")}
          type="email"
          {...register("email")}
          autoComplete="email"
          className="text-gray-300"
        />

        {/* Error Message Box */}
        {(errors.email || error) && (
          <div className="error-message bg-red-500/10 border border-red-500/50 text-red-500 text-sm rounded-xl p-3 flex items-center gap-2.5 shadow-sm animate-in fade-in slide-in-from-top-2 font-baloo-thambi rtl:font-tajawal">
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <p className="leading-tight">
              {errors?.email?.message || error?.message}
            </p>
          </div>
        )}

        {/* Button */}
        <Button
          className="bg-[#FF4100] rounded-full font-extrabold text-base text-white py-2 px-4"
          type="submit"
          disabled={isPending}
        >
          {isPending ? (
            <span className="animate-pulse">{t("verify")} ...</span>
          ) : (
            t("button")
          )}
        </Button>
      </div>
    </form>
  );
}
