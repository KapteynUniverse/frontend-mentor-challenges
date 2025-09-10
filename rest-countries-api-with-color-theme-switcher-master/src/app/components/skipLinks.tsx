"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SkipLink = {
  id: string;
  label: string;
};

const SkipLinks = () => {
  const pathname = usePathname();
  const isCountryPage = pathname?.startsWith("/country/");

  const links: SkipLink[] = isCountryPage
    ? [{ id: "border-links", label: "Skip to border links" }]
    : [
        { id: "filter-section", label: "Skip to filter section" },
        { id: "alphabet-nav", label: "Skip to alphabet navigation" },
        { id: "country-list", label: "Skip to main content" },
        { id: "pagination-nav", label: "Skip to page navigation" },
      ];

  const handleClick = (id: string) => {
    const container = document.getElementById(id);
    if (!container) return;

    const firstFocusable =
      container.querySelector<HTMLAnchorElement>("a") ||
      container.querySelector<HTMLInputElement>("input");

    firstFocusable?.focus();
  };

  return (
    <nav aria-label="Skip Links">
      {links.map(({ id, label }) => (
        <Link
          key={id}
          href={`#${id}`}
          onClick={() => handleClick(id)}
          className="skip-link"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default SkipLinks;
