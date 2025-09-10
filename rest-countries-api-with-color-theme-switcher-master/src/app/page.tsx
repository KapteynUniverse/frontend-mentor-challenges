import { getCountries } from "./lib/getCountries";
import BottomNav from "./components/bottomNav";
import FilteredCountries from "./components/filteredCountries";

export default async function Home() {
  const countries = await getCountries();
  const pageCalculate = Math.ceil(countries.length / 50);
  const limitedCountries = countries.slice(0, 50);

  return (
    <section
      id="country-list"
      aria-labelledby="country-list-title"
      className="limit-vw"
    >
      <h2 id="country-list-title" className="sr-only">
        The first 50 countries listed in alphabetical order
      </h2>
      <FilteredCountries
        countries={countries}
        limitedCountries={limitedCountries}
      />
      <BottomNav pageCalculate={pageCalculate} />
    </section>
  );
}
