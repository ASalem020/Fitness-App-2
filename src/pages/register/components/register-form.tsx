import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail, Lock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import type { RegisterFormValues } from "@/lib/types/register";
import { registerSchema } from "@/lib/schemas/register.schema";
import { useEffect } from "react";
import SocialIcons from "./social-icons";
import { useTranslations } from "use-intl";

interface props {
  setValues: React.Dispatch<React.SetStateAction<RegisterFormValues>>;
  setKycSteps: React.Dispatch<React.SetStateAction<boolean>>;
  backendError: string;
  currentValues: RegisterFormValues;
}

export default function RegisterForm({
  setValues,
  setKycSteps,
  backendError,
  currentValues,
}: props) {
  // Translations
  const registerForm = useTranslations("register.form");
  const registerFormValidation = useTranslations("register.formValidation");

  // Forms
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(registerSchema(registerFormValidation)),
  });

  // Handlers
  const onSubmit: SubmitHandler<RegisterFormValues> = async (values) => {
    values.rePassword = values.password;
    setValues(values);
    setKycSteps(true);
  };

  // Effects
  // Reset form when currentValues change (when switching back from KYC)
  useEffect(() => {
    form.reset(currentValues);
  }, [currentValues, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-4 py-6 p-10 w-96 text-white"
      >
        <div style={{ display: "none" }}>
          {JSON.stringify(form.formState.errors)}
        </div>

        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  startIcon={<User className="text-gray-500 h-5 w-5" />}
                  placeholder={registerForm("firstName")}
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  startIcon={<User className="text-gray-500 h-5 w-5" />}
                  placeholder={registerForm("lastName")}
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  startIcon={<Mail className="text-gray-500 h-5 w-5" />}
                  placeholder={registerForm("Email")}
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  startIcon={<Lock className="text-gray-500 h-5 w-5" />}
                  placeholder={registerForm("Password")}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Hidden rePassword */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input type="hidden" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Forget password */}
        <Link
          to={"/forget-password"}
          className="self-end text-primary hover:text-orange-700 transition-all font-bold underline"
        >
          {registerForm("ForgetPass")}
        </Link>

        {/* Social Media section icons */}
        <SocialIcons />

        {/* Backend Error Box */}
        {backendError && (
          <div className="error-message min-w-full bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-baloo-thambi rounded-xl p-3 flex items-center gap-2.5 shadow-sm animate-in fade-in slide-in-from-top-2">
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <p className="leading-tight">{backendError}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" variant={"default"} className="w-full">
          {registerForm("registerButton")}
        </Button>

        <p className="capitalize text-white">
          {registerForm("alreadyHaveAccount")}{" "}
          <Link
            to={"/login"}
            className="underline text-primary hover:text-orange-700 transition-all font-extrabold"
          >
            {registerForm("loginLink")}
          </Link>
        </p>
      </form>
    </Form>
  );
}
