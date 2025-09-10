import CountryCard from "@/app/components/countryCard";
import GoBackBtn from "@/app/components/goBackBtn";
import { getCountries, getCountry } from "@/app/lib/getCountries";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const selectedCountry = await getCountry(name);
  const allCountries = await getCountries();
  const countryData = selectedCountry[0];

  return (
    <section aria-labelledby="country-title" className="limit-vw">
      <GoBackBtn />
      <CountryCard
        countryData={countryData}
        allCountries={allCountries}
        countryName={name}
      />
    </section>
  );
}
