"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "system";
    }
    return "system";
  });

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const renderIcon = () => {
    if (theme === "light") return "🌞";
    if (theme === "dark") return "🌙";
    return "💻";
  };

  return (
    <button
      id={`theme-${theme}`}
      onClick={toggleTheme}
      aria-label={`Switch theme (current: ${theme})`}
      className="cursor-pointer capitalize hover-element transition-colors"
    >
      <span aria-hidden>{renderIcon()} </span>
      {theme} Mode
    </button>
  );
};

export default ThemeSwitcher;
