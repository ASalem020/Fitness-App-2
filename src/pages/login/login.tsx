import FormContainer from "@/components/shared/form-container";
import LoginForm from "./components/login-form";

export default function Login() {
  return (
    <main>
      <FormContainer
        title={"WELCOME BACK!"}
        subTitle={"Hey There,"}
        formComponent={<LoginForm />}
      />
    </main>
  );
}
