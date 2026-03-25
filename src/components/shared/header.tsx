import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png.png";
import Nav from "./nav";
import { cn } from "@/lib/utils/tailwind-merge";
import { Link } from "react-router-dom";

export default function Header() {
  // States
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Effects
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "flex justify-between items-center w-11/12 container mx-auto fixed top-10 left-1/2 -translate-x-1/2 duration-300",
        scrolled &&
          "bg-gray-300/20 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md",
      )}
    >
      {/* Logo */}
      <div className="site-logo">
        <img src={logo} alt="super fitness app logo" className="w-20 h-14" />
      </div>

      {/* Nav */}
      <Nav />

      {/* Login & Sign Up */}
      {/* this buttons will replace when design system is end and ahmed salem merge his code */}
      <div className="user-actions-buttons flex items-center justify-end gap-6 min-w-96">
        <Link to="/system-design">
          <button
            className="px-6 py-2 text-white font-semibold rounded hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#333" }}
          >
            System Design
          </button>
        </Link>
        <button
          className="px-6 py-2 text-white font-semibold rounded hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#FF4100" }}
        >
          Login
        </button>
        <button
          className="px-6 py-2 text-white font-semibold border-2 rounded hover:bg-orange-50 transition-colors"
          style={{ borderColor: "#FF4100", color: "#FF4100" }}
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}
