"use client";

import Link from "next/link";
import { useSearch } from "../context/searchContext";
import { usePathname } from "next/navigation";
const BottomNav = ({ pageCalculate }: { pageCalculate: number }) => {
  const { query } = useSearch();
  const pathname = usePathname();

  const currentPage = Number(pathname?.split("/").pop()) || 1;
  if (query.trim()) return null;
  return (
    <nav id="pagination-nav" aria-label="Page Navigation" className="my-8">
      <ul className="flex gap-4 justify-center">
        {Array.from({ length: pageCalculate }, (_, i) => (
          <li key={i}>
            <Link
              href={`/${i + 1}`}
              aria-current={currentPage === i + 1 ? "page" : undefined}
              className={`font-semibold hover-element focus:outline-offset-4 ${
                currentPage === i + 1 && "active-link"
              }`}
            >
              <span className="sr-only">Go to page: </span>
              {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
