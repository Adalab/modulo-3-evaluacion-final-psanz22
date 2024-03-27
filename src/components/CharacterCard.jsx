import { Link } from "react-router-dom";

function CharacterCard({ characterData }) {
  return (
    <li>
      <Link to={`/character/${characterData.id}`}>
        <img src={characterData.image} alt={characterData.name} />
        <h3>{characterData.name}</h3>
        <p>{characterData.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
