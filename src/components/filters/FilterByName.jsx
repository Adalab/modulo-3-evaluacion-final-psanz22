function FilterByName({ onChangeName }) {
  const handleChangeName = (event) => {
    event.preventDefault();
    onChangeName(event.target.value);
  };
  return (
    <form>
      <label htmlFor="name">Por nombre</label>
      <input id="name" type="text" onChange={handleChangeName} />
    </form>
  );
}

export default FilterByName;
