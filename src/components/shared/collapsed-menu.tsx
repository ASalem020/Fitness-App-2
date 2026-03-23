import { Link, useLocation } from "react-router-dom";
import logoWhiteText from "../../assets/images/logo-white-text.png";
import { cn } from "@/lib/utils/tailwind-merge";
import { useState } from "react";
import type { LinkProps } from "@/lib/types/nav-link";

type CollapsedMenuProps = {
  icon: React.ReactNode;
  links: LinkProps[];
};

export default function CollapsedMenu({ icon, links }: CollapsedMenuProps) {
  // States
  const [isOpen, setIsOpen] = useState(false);

  // Variables
  const { pathname } = useLocation();

  return (
    <div>
      {/* Icon */}
      <div
        className="auth-buttons-icon size-12 min-w-12 min-h-12 shrink-0 bg-orange-600 duration-300 hover:bg-orange-700 rounded-full flex items-center justify-center text-white cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {icon}
      </div>

      {/* Collapsed Menu */}
      {isOpen && (
        <div
          className="menu-container fixed w-screen h-screen bg-black/50 inset-0 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="menu flex flex-col gap-6 bg-neutral-800 py-6 px-4 z-50 w-11/12 h-fit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo White Text */}
            <div className="image">
              <img
                src={logoWhiteText}
                alt="fitness app with white text"
                width={87}
                height={55}
              />
            </div>

            {/* Nav Links */}
            <ul className="links flex flex-col gap-6">
              {links.map((link) => (
                <li
                  className={cn(
                    "font-bold duration-300 hover:text-orange-600 font-baloo-thambi text-xl",
                    pathname === link.href || pathname.startsWith(link.href)
                      ? "text-orange-600"
                      : "text-neutral-800 dark:text-zinc-100",
                  )}
                  key={link.id}
                >
                  <Link to={link.href} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
