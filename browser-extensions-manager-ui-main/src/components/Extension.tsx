type DataProps = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
  handleRemove: () => void;
  toggleState: () => void;
};

const Extension = ({
  logo,
  name,
  description,
  isActive,
  handleRemove,
  toggleState,
}: DataProps) => {
  return (
    <article className=" p-4 border-1 rounded-2xl min-h-48 flex flex-col justify-between transition-colors">
      <div className="flex text-left gap-4">
        <img src={logo} alt="" height={60} width={60} />
        <div>
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="article-text">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="border-1 rounded-full py-1 px-3 cursor-pointer remove-btn transition-colors font-medium"
          onClick={handleRemove}
        >
          Remove
        </button>
        <label className="w-12 h-6 rounded-full relative transition-colors cursor-pointer toggle-switch" aria-label={`Toggle state to ${isActive ? "active" : "inactive"}`}>
          <input
            type="checkbox"
            checked={isActive}
            onChange={toggleState}
            className="peer appearance-none"
          />
          <span className="w-6 h-6 rounded-full absolute inset-0 bg-gray-200 peer-checked:translate-x-full transition-transform"></span>
        </label>
      </div>
    </article>
  );
};

export default Extension;
