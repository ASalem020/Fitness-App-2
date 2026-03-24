import RegisterForm from "./components/register-form";

export default function Register() {
  return (
    <div className="h-screen flex flex-row">
      <div className="w-1/2 bg-gray-100">Auth layout</div>
      {/* <div className="w-1/2"> */}
      <RegisterForm />
      {/* </div> */}
    </div>
  );
}
