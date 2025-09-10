"use client";

import { useSearch } from "../context/searchContext";
import { CountryDataType } from "../types/countryTypes";
import CountriesList from "./countriesList";

type Props = {
  countries: CountryDataType[];
  limitedCountries: CountryDataType[];
};

const FilteredCountries = ({ countries, limitedCountries }: Props) => {
  const { query, region } = useSearch();

  const filtered = countries.filter((country) => {
    const matchesQuery = country.name.common
      .toLowerCase()
      .includes(query.toLowerCase().trim());

    const matchesRegion =
      region === "all" || country.region.toLowerCase() === region.toLowerCase();

    return matchesQuery && matchesRegion;
  });

  if (query.trim().length === 0 && (region === "all" || !region)) {
    return <CountriesList CountriesData={limitedCountries} />;
  }

  if (filtered.length === 0) {
    return (
      <h2 className="text-xl font-semibold text-center">No countries found</h2>
    );
  }

  return <CountriesList CountriesData={filtered} />;
};

export default FilteredCountries;
