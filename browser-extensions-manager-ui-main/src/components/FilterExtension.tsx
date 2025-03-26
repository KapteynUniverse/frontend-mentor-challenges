import { useState, useEffect } from "react";

interface Item {
  id: number;
  name: string;
  isActive: boolean;
}

export default function FilterableList() {
  const [data, setData] = useState<Item[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.example.com/items");
      const result: Item[] = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    if (filter === "all") return true;
    return filter === "active" ? item.isActive : !item.isActive;
  });

  return (
    <div>
      <fieldset>
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === "all"}
            onChange={() => setFilter("all")}
          />
          All
        </label>
        <label>
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
        </label>
      </fieldset>

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
