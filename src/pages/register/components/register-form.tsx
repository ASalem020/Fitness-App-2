import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail, Lock } from "lucide-react";

const registerSchema = z
  .object({
    firstName: z.string().min(3, "Name must be at least 3 characters long"),
    lastName: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    rePassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  // Forms
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    },
    mode: "all",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center gap-5 border border-gray-300 rounded-3xl py-6 p-10 w-1/3 m-auto"
      >
        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="First Name"
                    {...field}
                    className="pl-10 h-12 rounded-xl border-gray-300 focus:border-[#FF4100] focus:ring-[#FF4100]"
                  />
                </div>
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
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    {...field}
                    className="pl-10 h-12 rounded-xl border-gray-300 focus:border-[#FF4100] focus:ring-[#FF4100]"
                  />
                </div>
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
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className="pl-10 h-12 rounded-xl border-gray-300 focus:border-[#FF4100] focus:ring-[#FF4100]"
                  />
                </div>
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
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    autoComplete="new-password"
                    className="pl-10 h-12 rounded-xl border-gray-300 focus:border-[#FF4100] focus:ring-[#FF4100]"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Backend Error Box */}
        {/* {backendError && (
          <div className="rounded-lg border-2 border-maroon-700 bg-maroon-500/20 py-2 text-center text-sm text-maroon-700">
            {backendError}
          </div>
        )} */}
        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-12 rounded-xl bg-[#FF4100] hover:bg-[#e63a00] font-bold text-lg"
        >
          Register
        </Button>
      </form>
    </Form>
  );
}
