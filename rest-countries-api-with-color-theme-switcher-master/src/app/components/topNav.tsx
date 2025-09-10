"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const TopNav = () => {
  const pathname = usePathname();

  const isCountryPage = pathname.startsWith("/country/");
  const currentPage = pathname?.split("/").pop() || "";

  if (isCountryPage) {
    return null;
  }
  return (
    <nav
      id="alphabet-nav"
      aria-label="Alphabet Navigation"
      className="my-8 limit-vw"
    >
      <ul className="flex gap-4 justify-center flex-wrap">
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
          .filter((letter) => letter !== "X")
          .map((letter) => (
            <li key={letter}>
              <Link
                href={`/${letter}`}
                aria-current={currentPage === letter ? "page" : undefined}
                className={`font-semibold hover-element focus:outline-offset-4 ${
                  currentPage === letter && "active-link"
                }`}
              >
                <span className="sr-only">Look countries with letter: </span>
                {letter}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default TopNav;
