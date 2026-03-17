import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../lib/constants/nav-links.constant";
import { cn } from "../../lib/utils/tailwind-merge";

export default function Nav() {
  // Hooks
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="flex items-center gap-6 *:p-4">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link
              to={link.href}
              className={cn(
                "font-bold duration-300 hover:text-orange-600 font-baloo-thambi text-xl",
                pathname !== link.href ? "text-neutral-800" : "text-orange-600",
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
