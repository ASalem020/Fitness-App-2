import RegisterForm from "./components/register-form";
import { useState } from "react";
import type { RegisterFormValues } from "@/lib/types/register";
import FormContainer from "@/components/shared/form-container";
import { useTranslations } from "use-intl";
import Kyc from "./components/KYC/KYC steps/kyc-steps";

export default function Register() {
  // Translations
  const registerForm = useTranslations("register.form");

  // states
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
            title={registerForm("title")}
            subTitle={registerForm("subtitle")}
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
        <Kyc
          registerValues={registerValues}
          setKycSteps={setKycSteps}
          setError={setBackendError}
        />
      )}
    </div>
  );
}
