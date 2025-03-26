import { useState } from "react";
import ExtensionList from "./ExtensionList";
import FilterBtns from "./FilterBtns";

const Main = () => {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  return (
    <main className="mt-12">
      <section aria-labelledby="extensions-label">
        <div className="flex flex-col md:justify-between md:flex-row mb-6">
          <h2 id="extensions-label" className="text-3xl font-bold">
            Extensions List
          </h2>
          <div className="flex gap-2" aria-label="Filter buttons">
            <FilterBtns
              value="All"
              isActive={filter === "all"}
              handleChange={() => setFilter("all")}
            />
            <FilterBtns
              value="Active"
              isActive={filter === "active"}
              handleChange={() => setFilter("active")}
            />
            <FilterBtns
              value="Inactive"
              isActive={filter === "inactive"}
              handleChange={() => setFilter("inactive")}
            />
          </div>
        </div>
        <ExtensionList filterOption={filter} />
      </section>
    </main>
  );
};

export default Main;

{
  /* <label>
                <input
                  type="radio"
                  name="filter"
                  value="all"
                  checked={filter === "all"}
                  onChange={() => setFilter("all")}
                />
                All
              </label> */
}
{
  /* <label>
                <input
                  type="radio"
                  name="filter"
                  value="active"
                  checked={filter === "active"}
                  onChange={() => setFilter("active")}
                />
                Active
              </label>
              <label>
                <input
                  type="radio"
                  name="filter"
                  value="inactive"
                  checked={filter === "inactive"}
                  onChange={() => setFilter("inactive")}
                />
                Inactive
              </label> */
}
