import logo from "../../assets/images/logo.png";
import Nav from "./nav";
import MenuAuthInMobile from "./menu-auth-in-mobile";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-[500] w-full flex justify-between items-center px-5 md:px-0 lg:w-11/12 container mx-auto py-4 ">
      {/* Logo */}
      <div className="site-logo">
        <img src={logo} alt="super fitness app logo" className="w-20 h-14" />
      </div>

      {/* Nav */}
      <Nav />

      {/* Login & Sign Up */}
      {/* ! will appear only on large and medium screens */}
      <div className="user-actions-buttons hidden md:flex items-center justify-end gap-8 lg:min-w-96">
        <Button
          variant="primaryWithIcon"
          defaultIcon={<ArrowUpRight className="h-4 w-4" />}
          iconContainerClass="rounded-full border-2 border-white h-9 w-9"
        >
          <Link to="/login">Login</Link>
        </Button>
        <Button
          variant="secondaryWithIcon"
          endIcon={<ArrowUpRight className="h-4 w-4 text-white" />}
          iconContainerClass="rounded-full bg-[#FF4A11] h-7 w-7"
        >
          <Link to="/register">Sign Up</Link>
        </Button>
      </div>

      {/* Will appear only on mobile and tablet ( small ) screens */}
      <MenuAuthInMobile />
    </header>
  );
}
