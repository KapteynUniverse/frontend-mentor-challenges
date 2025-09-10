"use client";
import Searchbar from "./searchbar";
import { usePathname } from "next/navigation";

const FilterSection = () => {
  const pathname = usePathname();

  const isCountryPage = pathname.startsWith("/country/");

  if (isCountryPage) {
    return null;
  }
  return (
    <section
      id="filter-section"
      aria-labelledby="filter-title"
      className="limit-vw my-8 gap-8"
    >
      <h2 id="filter-title" className="sr-only">
        Search a Country or Filter by region
      </h2>
      <Searchbar />
    </section>
  );
};

export default FilterSection;
