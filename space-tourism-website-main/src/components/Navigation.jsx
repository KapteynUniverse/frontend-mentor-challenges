import { Link, useLocation } from "react-router-dom";
import logo from "/assets/images/icons/logo.svg";
import hamburger from "/assets/images/icons/icon-hamburger.svg";
import closeIcon from "/assets/images/icons/icon-close.svg";
import { useState, useEffect } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [role, setRole] = useState("dialog");
  const [inert, setInert] = useState("");
  const [hidden, setHidden] = useState("false");
  const location = useLocation();

  function openNav() {
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    const updateRole = () => {
      setRole(window.innerWidth >= 768 ? "navigation" : "dialog");
      setInert(window.innerWidth >= 768 ? null : "");
      setHidden(window.innerWidth >= 768 ? "false" : "true");
    };
    updateRole();

    window.addEventListener("resize", updateRole);

    return () => window.removeEventListener("resize", updateRole);
  }, []);

  const navItems = [
    { to: "/", label: "00 Home" },
    { to: "/destination", label: "01 Destination" },
    { to: "/crew", label: "02 Crew" },
    { to: "/technology", label: "03 Technology" },
  ];

  return (
    <header className="w-full md:flex md:justify-between md:items-center px-generalInlineMT py-6 md:py-headerTopTD md:pr-0 md:pl-headerInlineTD font-BarlowCon">
      <div className="flex justify-between">
        <img
          src={logo}
          alt=""
          width="48"
          height="48"
          className="logo md:mr-10"
        />
        <button
          aria-controls="nav-menu"
          aria-label={
            isNavOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isNavOpen ? "true" : "false"}
          className="md:hidden z-20"
          onClick={openNav}
        >
          <img src={isNavOpen ? closeIcon : hamburger} alt="" />
        </button>
      </div>
      <div className="hidden lg:block h-[1px] bg-gray-500 translate-x-6 z-20 flex-1"></div>
      <nav
        id="nav-menu"
        role={role}
        inert={isNavOpen ? null : inert}
        aria-hidden={isNavOpen ? !hidden : hidden}
        className={`${
          isNavOpen ? "opacity-100" : "opacity-0"
        } fixed right-0 top-0 w-2/3 h-screen custom-glass py-10 md:opacity-100 md:static md:w-full md:h-auto md:right-auto md:top-auto text-preset8 lg:w-1/2 z-10 transition-all duration-500 ease-out `}
      >
        <ul className="flex flex-col text-left gap-12 md:flex-row md:justify-center ml-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setIsNavOpen(false)}
                aria-current={
                  location.pathname === item.to ? "page" : undefined
                }
                className={`relative ${
                  location.pathname === item.to ? "active-link" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
