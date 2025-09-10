import Image from "next/image";
import { CountryDataType } from "../types/countryTypes";
import Link from "next/link";

const CountryCard = ({
  countryData,
  allCountries,
  countryName,
}: {
  countryData: CountryDataType;
  allCountries: CountryDataType[];
  countryName?: string;
}) => {
  const firstNativeName =
    Object.values(countryData.name.nativeName ?? {})[0]?.common ||
    countryData.name.common;

  const currencies = countryData.currencies
    ? Object.values(countryData.currencies)[0]
    : undefined;

  return (
    <article
      id={countryName ? "country-card" : undefined}
      className={
        countryName
          ? "flex flex-col md:flex-row lg:gap-12 xl:gap-24 max-md:gap-8 my-8"
          : "article-focus"
      }
    >
      <div
        className={`relative aspect-video ${countryName ? "md:flex-2/5" : ""}`}
      >
        <Image
          src={countryData.flags.png}
          alt={countryData.flags.alt || `${countryData.name.common} flag`}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          decoding="async"
          className={`${countryName ? "object-contain" : "object-cover"}`}
        />
      </div>
      <div className={`p-6 ${countryName ? "md:flex-3/5" : ""}`}>
        {countryName ? (
          <h2
            id="country-title"
            className={`mb-4 font-extrabold ${countryName ? "text-4xl" : ""}`}
          >
            {countryData.name.common}
          </h2>
        ) : (
          <h3
            id="country-title"
            className={`mb-4 font-extrabold ${countryName ? "text-4xl" : ""}`}
          >
            {countryData.name.common}
          </h3>
        )}
        <div className="text-sm flex justify-between gap-16 flex-col md:flex-row md:gap-4">
          <div className="flex flex-col gap-2">
            {countryName && (
              <p>
                <strong>Native Name:</strong> {firstNativeName}
              </p>
            )}
            <p>
              <strong>Population:</strong>{" "}
              {new Intl.NumberFormat("en-US").format(countryData.population)}
            </p>
            <p>
              <strong>Region:</strong> {countryData.region}
            </p>
            {countryName && (
              <p>
                <strong>Sub Region:</strong> {countryData.subregion}
              </p>
            )}
            <p>
              <strong>Capital:</strong> {countryData.capital?.join(", ")}
            </p>
          </div>
          {countryName && (
            <div className="flex flex-col gap-2">
              <p>
                <strong>Top Level Domain:</strong> {countryData.tld?.join(", ")}
              </p>
              {currencies && (
                <p>
                  <strong>Currencies:</strong> {currencies.name}
                </p>
              )}
              <p>
                <strong>Languages:</strong>{" "}
                {countryData.languages
                  ? Object.values(countryData.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          )}
        </div>
        {countryData.borders && (
          <nav
            id="border-links"
            aria-label="Border countries"
            className="flex flex-col md:flex-row md:items-center gap-2 mt-12"
          >
            <p className="min-w-fit">
              <strong>Border Countries:</strong>
            </p>
            <ul className="flex gap-2 flex-wrap md:justify-center">
              {countryData.borders.map((borderCode: string) => {
                const borderCountry = allCountries.find(
                  (c) => c.cca3 === borderCode
                );
                return (
                  <li key={borderCode}>
                    <Link
                      id={borderCode}
                      href={`/country/${borderCountry?.name.common}`}
                      className="inline-block text-center px-4 py-1 min-w-32 rounded-sm shadow hover-element hover:ring-2"
                    >
                      {borderCountry ? borderCountry.name.common : borderCode}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </article>
  );
};

export default CountryCard;
