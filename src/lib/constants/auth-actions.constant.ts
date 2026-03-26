import type { LinkProps } from "../types/nav-link";

export const authActionsLinks: LinkProps[] = [
  {
    id: crypto.randomUUID(),
    href: "/login",
    label: "Login",
  },
  {
    id: crypto.randomUUID(),
    href: "/register",
    label: "Register",
  },
];
