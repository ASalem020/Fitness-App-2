import RegisterForm from "./components/register-form";
import { useState } from "react";
import type { RegisterFormValues } from "@/lib/types/register";
import KYC from "./components/KYC/KYC steps/KYC-steps";
import FormContainer from "@/components/shared/form-container";
import { useTranslations } from "use-intl";

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
        <KYC
          registerValues={registerValues}
          setKycSteps={setKycSteps}
          setError={setBackendError}
        />
      )}
    </div>
  );
}
