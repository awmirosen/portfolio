"use client";

import { useTheme } from "next-themes";
import {Sun , Moon} from "lucide-react"
import { Button } from "@/components/ui/button";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="secondary"

      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun/> : <Moon/>}
    </Button>
  );
};

export default ToggleTheme;
