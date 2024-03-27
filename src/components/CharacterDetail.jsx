function CharacterDetail({ character }) {
  console.log("yuhu", character);
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h4>{`${character.name}`}</h4>
      <p>{`Status: ${character.status}`}</p>
      <p>{`Species: ${character.species}`}</p>
      <p>{`Origin: ${character.origin}`}</p>
      <p>{`Episodes: ${character.episodes}`}</p>
    </div>
  );
}

export default CharacterDetail;
