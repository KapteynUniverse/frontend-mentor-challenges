import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import Extension from "./Extension";
import errorImg from "/assets/images/error.svg";

interface ExtensionListProps {
  filterOption: "all" | "active" | "inactive";
}

const ExtensionList = ({ filterOption }: ExtensionListProps) => {
  const { extensions, loading, error } = useFetchData();
  const [extensionData, setExtensionData] = useState<typeof extensions>([]);

  useEffect(() => {
    setExtensionData(extensions);
  }, [extensions]);

  if (loading)
    return (
      <div className="max-w-fit mx-auto">
        <div className="relative w-12 h-12 border-t-2 animate-spin border-amber-400 mx-auto rounded-full">
          <div className="absolute translate-full w-4 h-4 border-b-2 border-amber-900 rounded-full"></div>
        </div>

        <p>Loading extensions...</p>
      </div>
    );
  if (error)
    return (
      <div className="text-center">
        <img
          src={errorImg}
          alt="Error occurred"
          className="mx-auto w-24 h-24"
        />
        <p className="text-red-500 font-semibold">Error: {error}</p>
      </div>
    );

  const handleRemove = (extensionName: string) => {
    setExtensionData((prevExtensions) =>
      prevExtensions.filter((extension) => extension.name !== extensionName)
    );
  };

  const handleToggle = (extensionName: string) => {
    setExtensionData((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.name === extensionName
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  };

  const filteredExtensions = extensionData
    .filter((extension) => {
      if (filterOption === "all") return true;
      return filterOption === "active"
        ? extension.isActive
        : !extension.isActive;
    })
    .map((extension, index) => (
      <li key={index}>
        <Extension
          logo={extension.logo}
          name={extension.name}
          description={extension.description}
          isActive={extension.isActive}
          handleRemove={() => handleRemove(extension.name)}
          toggleState={() => handleToggle(extension.name)}
        />
      </li>
    ));

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(17.75rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-2">
      {filteredExtensions}
    </ul>
  );
};

export default ExtensionList;
