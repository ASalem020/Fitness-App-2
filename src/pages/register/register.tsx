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

  return (
    <div className="flex flex-col items-center justify-center">
      {!KycSteps ? (
        <div>
          {/* Form Container component... */}
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
        // KYC Steps component to be continued...
        <KYC registerValues={registerValues} />
      )}
    </div>
  );
}
