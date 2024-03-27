function CharacterCard({ characterData }) {
  return (
    <li>
      <img src={characterData.image} alt={characterData.name} />
      <h3>{characterData.name}</h3>
      <p>{characterData.species}</p>
    </li>
  );
}

export default CharacterCard;
