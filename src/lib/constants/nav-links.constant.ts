import type { LinkProps } from "../types/nav-link";

export const navLinks: LinkProps[] = [
  {
    id: crypto.randomUUID(),
    href: "/",
    label: "Home",
    translationKey: "home",
  },
  {
    id: crypto.randomUUID(),
    href: "/about",
    label: "About",
    translationKey: "about",
  },
  {
    id: crypto.randomUUID(),
    href: "/classes",
    label: "Classes",
    translationKey: "classes",
  },
  {
    id: crypto.randomUUID(),
    href: "/healthy",
    label: "Healthy",
    translationKey: "healthy",
  },
];
