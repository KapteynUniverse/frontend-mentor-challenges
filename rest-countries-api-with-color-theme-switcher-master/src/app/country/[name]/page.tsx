import CountryCard from "@/app/components/countryCard";
import GoBackBtn from "@/app/components/goBackBtn";
import { getCountries, getCountry } from "@/app/lib/getCountries";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  const selectedCountry = await getCountry(decodedName);
  const allCountries = await getCountries();
  const countryData = selectedCountry[0];

  return (
    <section aria-labelledby="country-title" className="limit-vw">
      <GoBackBtn />
      <CountryCard
        countryData={countryData}
        allCountries={allCountries}
        countryName={decodedName}
      />
    </section>
  );
}

