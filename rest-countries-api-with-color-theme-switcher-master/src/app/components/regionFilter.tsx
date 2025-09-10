import { useSearch } from "../context/searchContext";

const RegionFilter = () => {
  const { region, setRegion } = useSearch();

  return (
    <div className="select-arrow w-fit">
      <label className="sr-only" htmlFor="region-select">
        Filter countries by region
      </label>
      <select
        id="region-select"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="p-4 pr-8 rounded-md shadow cursor-pointer appearance-none hover:ring-2 transition-shadow"
      >
        <option value="all">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default RegionFilter;
