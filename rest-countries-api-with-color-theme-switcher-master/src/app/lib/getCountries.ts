import { CountryDataType } from "../types/countryTypes";

let cachedCountries: CountryDataType[];

export async function getCountries() {
  if (cachedCountries) return cachedCountries;
  const res = await fetch(
    `${process.env.API_URL}/all?fields=name,flags,population,region,capital,cca3`
  );
  if (!res.ok) throw new Error("Failed to fetch countries");

  const countries = await res.json();
  const alphabeticallySortedCountries = countries.sort(
    (a: CountryDataType, b: CountryDataType) => {
      return a.name.common.localeCompare(b.name.common);
    }
  );
  cachedCountries = alphabeticallySortedCountries;
  return alphabeticallySortedCountries;
}

export async function getCountry(name: string) {
  if (!name) return;

  const res = await fetch(`${process.env.API_URL}/name/${name}`);
  if (!res.ok) throw new Error("Failed to fetch countries");

  const country = await res.json();

  return country;
}
