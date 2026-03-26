import { TextAlignEnd, User } from "lucide-react";
import CollapsedMenu from "./collapsed-menu";
import { navLinks } from "@/lib/constants/nav-links.constant";
import { authActionsLinks } from "@/lib/constants/auth-actions.constant";

export default function MenuAuthInMobile() {
  return (
    <div className="menu-auth-in-mobile flex items-center gap-4 md:hidden">
      {/* Auth Buttons */}
      <CollapsedMenu icon={<User size={24} />} links={authActionsLinks} />

      {/* Nav Links */}
      <CollapsedMenu icon={<TextAlignEnd size={24} />} links={navLinks} />
    </div>
  );
}
