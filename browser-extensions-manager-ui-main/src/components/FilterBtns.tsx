type InputProps = {
  value: string;
  isActive: boolean;
  handleChange: React.MouseEventHandler<HTMLButtonElement>;
};

const FilterBtns = ({ value, isActive, handleChange }: InputProps) => {
  return (
    <button
      aria-pressed={isActive}
      type="button"
      onClick={handleChange}
      className={`font-medium cursor-pointer px-4 py-1 inline-block rounded-4xl  border-1 filter-btn ${
        isActive ? "filter-btn-active" : "filter-btn-passive"
      }`}
    >
      {value}
    </button>
  );
};

export default FilterBtns;
