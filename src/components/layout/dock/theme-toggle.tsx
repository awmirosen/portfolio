"use client";

import { useTheme } from "next-themes";
import { SunDim, Moon } from "lucide-react";

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 rounded-full cursor-pointer transition-all duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunDim size={20} /> : <Moon size={20} />}
    </button>
  );
};
