import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../lib/constants/nav-links.constant";
import { cn } from "../../lib/utils/tailwind-merge";

export default function Nav() {
  // Hooks
  const { pathname } = useLocation();

  return (
    <nav className="hidden md:block ">
      <ul className="flex items-center gap-6 px-2 py-4 lg:*:p-4">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              className={cn(
                "font-bold duration-300 hover:text-orange-600 font-baloo-thambi text-lg lg:text-xl",
                pathname === link.href
                  ? "text-orange-600"
                  : "text-neutral-800 dark:text-zinc-100",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
