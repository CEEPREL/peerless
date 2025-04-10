"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Just making sure the component has mounted before we try to access the theme
  // This avoids weird hydration issues when rendering on the server
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // This toggles between light and dark mode
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-500  hover:bg-gray-300 transition-all"
      aria-label="Toggle theme"
    >
      {/* If the current theme is light, show Moon icon to suggest dark mode is next.
          If it's dark, show Sun icon to suggest light mode is next. */}
      {theme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}

export default ThemeToggle;
