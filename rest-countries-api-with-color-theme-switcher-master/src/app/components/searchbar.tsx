import { useSearch } from "../context/searchContext";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import RegionFilter from "./regionFilter";

const Searchbar = () => {
  const { query, setQuery, setRegion } = useSearch();
  const pathname = usePathname();
  useEffect(() => {
    setQuery("");
    setRegion("all");
  }, [pathname, setQuery, setRegion]);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex justify-between flex-col md:flex-row gap-4 w-full"
    >
      <div className="relative flex-1">
        <label htmlFor="q" className="sr-only">
          Search for a country...
        </label>
        <input
          id="q"
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="md:max-w-1/2 w-full h-full pl-12 pr-4 py-3 rounded-md shadow hover:ring-2 transition-shadow"
        />
        <span
          aria-hidden
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          🔍
        </span>
      </div>
      <RegionFilter />
    </form>
  );
};

export default Searchbar;
