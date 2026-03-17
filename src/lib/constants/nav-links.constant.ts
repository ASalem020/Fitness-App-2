import type { NavLink } from "../types/nav-link";

export const navLinks: NavLink[] = [
  {
    id: crypto.randomUUID(),
    href: "/",
    label: "Home",
  },
  {
    id: crypto.randomUUID(),
    href: "/about",
    label: "About",
  },
  {
    id: crypto.randomUUID(),
    href: "/classes",
    label: "Classes",
  },
  {
    id: crypto.randomUUID(),
    href: "/healthy",
    label: "Healthy",
  },
];
