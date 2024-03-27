import FilterByName from "./FilterByName";

function Filters({ onChangeName }) {
  return (
    <div>
      <h3>Filtro</h3>
      <FilterByName onChangeName={onChangeName} />
    </div>
  );
}

export default Filters;
