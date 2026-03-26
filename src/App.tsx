import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layout/root-layout";
import About from "./pages/about/about";
import SystemDesign from "./pages/system-design";
import AuthLayout from "./components/layout/auth-layout";
import Login from "./pages/login/login";
import ForgetPassword from "./pages/forget-pass/forget-password";
import Home from "./pages/home/home";
import Classes from "./pages/classes/classes";
import Healthy from "./pages/healthy/healthy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="classes" element={<Classes />} />
        <Route path="healthy" element={<Healthy />} />
        <Route path="system-design" element={<SystemDesign />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Route>
    </Routes>
  );
}
