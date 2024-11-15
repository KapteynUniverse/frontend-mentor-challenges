import { Link, useLocation } from "react-router-dom";

function Radio({ legend, page, type, currentPage }) {
  const location = useLocation();

  return (
    <fieldset
      className={`flex justify-center gap-8 lg:justify-start ${
        currentPage === "tech" ? "lg:flex-col lg:justify-between" : ""
      }`}
    >
      <legend className="sr-only">{legend}</legend>
      {page.map((item, index) => {
        const isCurrentPage =
          location.pathname ===
          `/${type}/${item.name.toLowerCase().replace(/\s+/g, "%20")}`;
        return (
          <div
            key={item.name}
            className="flex flex-col items-center mb-8 text-preset8"
          >
            <Link
              to={`/${type}/${item.name.toLowerCase().replace(/\s+/g, "%20")}`}
              aria-current={isCurrentPage ? "page" : undefined}
            >
              <input
                type="radio"
                id={item.name}
                name={type}
                value={item.name}
                tabIndex={currentPage === "crew" ? -1 : 0}
                className={
                  currentPage === "crew"
                    ? `block w-4 h-4 hover:opacity-70 hover:cursor-pointer ${
                        location.pathname ===
                        `/${type}/${item.name
                          .toLowerCase()
                          .replace(/\s+/g, "%20")}`
                          ? "opacity-100"
                          : index === 0 && location.pathname === "/crew"
                          ? "opacity-100"
                          : "opacity-30"
                      }`
                    : "hidden"
                }
              />

              {currentPage === "dest" ? (
                <span
                  className={`radio-destination font-BarlowCon ${
                    location.pathname ===
                    `/${type}/${item.name.toLowerCase().replace(/\s+/g, "%20")}`
                      ? "active-link text-white"
                      : index === 0 && location.pathname === "/destination"
                      ? "text-white active-link"
                      : "text-blue-white"
                  }`}
                >
                  {item.name}
                </span>
              ) : null}

              {currentPage === "tech" ? (
                <span
                  className={`text-crewTechH2MT md:text-crewTechH2TD w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full border hover:opacity-70 flex items-center justify-center ${
                    location.pathname ===
                    `/${type}/${item.name.toLowerCase().replace(/\s+/g, "%20")}`
                      ? "bg-white text-blue-black"
                      : index === 0 && location.pathname === "/technology"
                      ? "bg-white text-blue-black"
                      : "opacity-30"
                  }`}
                >
                  {index + 1}
                </span>
              ) : null}
            </Link>
          </div>
        );
      })}
    </fieldset>
  );
}

export default Radio;
