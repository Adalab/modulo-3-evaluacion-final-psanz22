import FilterByName from "./FilterByName";

function Filters({ onChangeName, filterName }) {
  return (
    <div>
      <h3>Filtro</h3>
      <FilterByName onChangeName={onChangeName} filterName={filterName} />
    </div>
  );
}

export default Filters;
