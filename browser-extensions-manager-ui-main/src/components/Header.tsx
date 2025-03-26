import { useEffect, useState } from "react";
import logo from "/assets/images/logo.svg";
import MoonLogo from "/assets/images/icon-moon.svg";
import SunLogo from "/assets/images/icon-sun.svg";
const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <header className="flex justify-between bg-cNeutral-800 p-4 rounded-2xl ">
      <h1 className="sr-only">FEM Browser Extensions Manager UI</h1>
      <a href="/" aria-label="Home">
        <img
          src={logo}
          alt=""
          height={41}
          width={179}
          aria-hidden
          className={theme === "dark" ? "invert" : ""}
        />
      </a>
      <button
        type="button"
        onClick={toggleTheme}
        className="p-2 rounded-xl cursor-pointer"
        aria-label={
          theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
      >
        <img
          src={theme === "light" ? MoonLogo : SunLogo}
          alt=""
          height={22}
          width={22}
        />
      </button>
    </header>
  );
};

export default Header;
