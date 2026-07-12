"use client";

import { useTheme } from "next-themes";
import { LuSunMoon } from "react-icons/lu";

export const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 cursor-pointer hover:bg-primary/20 hover:scale-105"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <LuSunMoon size={20} />
    </button>
  );
};
