import FormContainer from "@/components/shared/form-container";
import LoginForm from "./components/login-form";
import { useTranslations } from "use-intl";

export default function Login() {
  const t = useTranslations("login.form");

  return (
    <main>
      <FormContainer
        title={t("welcome")}
        subTitle={t("subtitle")}
        formComponent={<LoginForm />}
      />
    </main>
  );
}
