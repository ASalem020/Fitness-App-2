import { ThemeContext } from "@/components/providers/app/components/theme-provider";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);
