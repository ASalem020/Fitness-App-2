import logo from "../../assets/images/logo.png";
import Nav from "./nav";
import MenuAuthInMobile from "./menu-auth-in-mobile";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 md:px-0 lg:w-11/12 container mx-auto py-10">
      {/* Logo */}
      <div className="site-logo">
        <img src={logo} alt="super fitness app logo" className="w-20 h-14" />
      </div>

      {/* Nav */}
      <Nav />

      {/* Login & Sign Up */}
      {/* ! will appear only on large and medium screens */}
      {/* this buttons will replace when design system is end and ahmed salem merge his code */}
      <div className="user-actions-buttons hidden md:flex items-center justify-end gap-8 lg:min-w-96">
        <button
          className="px-4 lg:px-6 py-2 text-white font-semibold rounded hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#FF4100" }}
        >
          Login
        </button>
        <button
          className="px-4 lg:px-6 py-2 text-white font-semibold border-2 rounded hover:bg-orange-50 transition-colors"
          style={{ borderColor: "#FF4100", color: "#FF4100" }}
        >
          Sign Up
        </button>
      </div>

      {/* Will appear only on mobile and tablet ( small ) screens */}
      <MenuAuthInMobile />
    </header>
  );
}
