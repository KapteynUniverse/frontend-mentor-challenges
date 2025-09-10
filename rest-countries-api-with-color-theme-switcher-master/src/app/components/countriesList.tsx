import Link from "next/link";
import { CountryDataType } from "../types/countryTypes";
import CountryCard from "./countryCard";

const CountriesList = ({
  CountriesData,
}: {
  CountriesData: CountryDataType[];
}) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(17.5rem,1fr))] gap-8 md:gap-16 place-items-center" aria-live="polite">
      {CountriesData.map((country: CountryDataType) => (
        <li
          key={country.name.common}
          className="max-w-[17.5rem] rounded-md overflow-hidden w-full shadow"
        >
          <Link href={`/country/${country.name.common}`} className="group">
            <CountryCard countryData={country} allCountries={CountriesData} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;

