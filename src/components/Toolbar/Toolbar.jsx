import "./toolbar.css";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <>
      {filters.map((filter) => (
        <span
          key={filter}
          className={`filter${filter === selected ? " active" : ""}`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </span>
      ))}
    </>
  );
}
