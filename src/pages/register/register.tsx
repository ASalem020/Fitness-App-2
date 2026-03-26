import RegisterForm from "./components/register-form";
import { useState } from "react";
import type { RegisterFormValues } from "@/lib/types/register";
import KYC from "./components/KYC";

export default function Register() {
  const [registerValues, setRegisterValues] = useState<RegisterFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [KycSteps, setKycSteps] = useState(false);

  console.log(registerValues);

  return (
    <div className="grid grid-cols-2 min-h-screen">
      {/* Left Part */}
      <div className="flex items-center justify-center border-r border-orange-600 bg-orange-50">
        left-part
      </div>

      {/* Right Part */}
      <div className="flex flex-col items-center justify-center bg-black/75">
        {/* Form Container component... */}
        {!KycSteps ? (
          <div>
            {/* SubTitle */}
            <p className="mb-5 font-baloo-thambi text-2xl text-white text-center capitalize">
              hey there
            </p>

            {/* Title */}
            <h1 className="text-5xl font-extrabold text-white font-baloo-thambi mb-4 capitalize text-center">
              create an account
            </h1>

            {/* Form Container */}
            <div className="form-container p-10 border border-gray-300 rounded-[3.125rem] flex justify-center">
              {/* Form will render here */}
              <RegisterForm
                setValues={setRegisterValues}
                setKycSteps={setKycSteps}
              />
            </div>
          </div>
        ) : (
          <KYC registerValues={registerValues} />
        )}
      </div>
    </div>
  );
}
