import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Lock,
  Eye,
  Facebook,
  Chrome,
  Apple,
  Loader2,
} from "lucide-react";
import { loginSchema, type LoginFormData } from "@/lib/schemas/login.schemas";
import { useLogin } from "../hooks/use-login";
import { Link } from "react-router-dom";

export default function LoginForm() {
  // mutation
  const { mutate, isPending } = useLogin();

  // form
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // function
  const onSubmit = (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full border border-white rounded-3xl p-10">
        <h2 className="text-white text-3xl font-bold text-center mb-5">
          Login
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Field Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email"
                        className="w-full h-12 text-white rounded-full pl-12 pr-4 leading-[48px] placeholder:text-gray-500"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs ml-4 mt-1" />
                </FormItem>
              )}
            />

            {/* Field Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                        className="w-full bg-transparent border-white/20 text-white rounded-full py-6 pl-12 pr-12 placeholder:text-gray-500 "
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs ml-4 mt-1" />
                </FormItem>
              )}
            />

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-[#FF4D00] text-sm font-semibold underline "
              >
                Forget Password?
              </Link>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mx-14 ">
              <div className="h-[1px] flex-grow bg-white"></div>
              <span className="text-gray-300 text-sm">Or</span>
              <div className="h-[1px] flex-grow bg-white"></div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              {[{ Icon: Facebook }, { Icon: Chrome }, { Icon: Apple }].map(
                ({ Icon }, idx) => (
                  <Button
                    key={idx}
                    type="button"
                    variant="outline"
                    size="icon"
                    className="w-8 h-8 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:border-white/20"
                  >
                    <Icon className="w-3 h-5" />
                  </Button>
                ),
              )}
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-[#FF4D00] text-white py-4 rounded-full font-bold text-lg hover:bg-[#e64500] disabled:opacity-50"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Please wait
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>

        <p className="text-white text-center mt-2 text-sm">
          Dont Have An Account Yet?{" "}
          <Link
            to="/register"
            className="text-[#FF4D00] font-bold hover:underline transition-colors"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
