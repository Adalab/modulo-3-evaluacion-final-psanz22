import "../scss/components/CharacterDetail.scss";

function CharacterDetail({ character }) {
  console.log("yuhu", character);
  return (
    <div className="card">
      <img
        src={character.image}
        alt={character.name}
        className="pictureDetail"
      />
      <h4 className="nameCharacter">{`${character.name}`}</h4>
      <p>{`Status: ${character.status}`}</p>
      <p>{`Species: ${character.species}`}</p>
      <p>{`Origin: ${character.origin}`}</p>
      <p>{`Episodes: ${character.episodes}`}</p>
    </div>
  );
}

export default CharacterDetail;
