import { createContext, useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<{
  theme: string;
  toggleTheme?: () => void;
}>({ theme: "light" });

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  //   States
  const [theme, setTheme] = useState("light");

  // Effects
  useEffect(() => {
    const body = document.body;

    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
