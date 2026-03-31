import RegisterForm from "./components/register-form";
import { useState } from "react";
import type { RegisterFormValues } from "@/lib/types/register";
import KYC from "./components/KYC/KYC steps/KYC-steps";
import FormContainer from "@/components/shared/form-container";

export default function Register() {
  const [registerValues, setRegisterValues] = useState<RegisterFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const [KycSteps, setKycSteps] = useState(false);

  // states
  const [backendError, setBackendError] = useState<string>("");

  return (
    <div className="flex flex-col items-center justify-center my-20">
      {!KycSteps ? (
        // Register form
        <div>
          <FormContainer
            title="create an account"
            subTitle="hey there"
            formComponent={
              <RegisterForm
                setValues={setRegisterValues}
                setKycSteps={setKycSteps}
                backendError={backendError}
                currentValues={registerValues}
              />
            }
          />
        </div>
      ) : (
        // KYC steps
        <KYC
          registerValues={registerValues}
          setKycSteps={setKycSteps}
          setError={setBackendError}
        />
      )}
    </div>
  );
}
