import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

export default function ForgetPassForm() {
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
        {/* Input Container */}
        <div className="input-container flex items-center gap-2.5 text-gray-300 py-2 px-4 rounded-3xl border border-gray-300">
          {/* Icon */}
          <Mail size={20} />
          {/* Input */}
          <Input
            type="email"
            placeholder="Email"
            className="bg-transparent border-none p-0 font-baloo-thambi text-sm"
          />
        </div>

        {/* Button */}
        <Button className="font-baloo-thambi bg-[#FF4100] rounded-full font-extrabold text-base text-white py-2 px-4">
          Sent OTP
        </Button>
      </div>
    </form>
  );
}
