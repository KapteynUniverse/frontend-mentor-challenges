import { getCountries } from "../lib/getCountries";
import { CountryDataType } from "../types/countryTypes";
import BottomNav from "../components/bottomNav";
import FilteredCountries from "../components/filteredCountries";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const countries = await getCountries();
  const pageCalculate = Math.ceil(countries.length / 50);

  const responseSize = 50;
  let limitedCountries;

  if (!isNaN(Number(page))) {
    const pageNum = Number(page);
    const startIndex = (pageNum - 1) * responseSize;
    const endIndex = pageNum * responseSize;
    limitedCountries = countries.slice(startIndex, endIndex);
  } else {
    const letter = page.toUpperCase();
    limitedCountries = countries.filter((country: CountryDataType) =>
      country.name.common.toUpperCase().startsWith(letter)
    );
  }

  return (
    <section aria-labelledby="country-sorted-list-title" className="limit-vw">
      {!isNaN(Number(page)) ? (
        <h2 id="country-sorted-list-title" className="sr-only">
          Page {page} of All Countries
        </h2>
      ) : (
        <h2 id="country-sorted-list-title" className="sr-only">
          All Countries Starting with Letter {page}
        </h2>
      )}

      <FilteredCountries
        countries={countries}
        limitedCountries={limitedCountries}
      />
      {!isNaN(Number(page)) ? (
        <BottomNav pageCalculate={pageCalculate} />
      ) : null}
    </section>
  );
}
