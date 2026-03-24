import FormContainer from "@/components/shared/form-container";
import ForgetPassForm from "./components/forget-pass-form";

export default function ForgetPassword() {
  return (
    <main>
      {/* Form Container */}
      {/* Reusable Form Component */}
      <FormContainer
        title="forget password"
        formComponent={<ForgetPassForm />}
        subTitle="hi , there"
      />
    </main>
  );
}
