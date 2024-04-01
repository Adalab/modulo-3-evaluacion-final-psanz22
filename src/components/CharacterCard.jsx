import { Link } from "react-router-dom";
import "../scss/components/CharacterCard.scss";

function CharacterCard({ characterData }) {
  return (
    <li>
      <Link to={`/character/${characterData.id}`} className="Link">
        <img
          src={characterData.image}
          alt={characterData.name}
          className="pictures"
        />
        <h3 className="name">{characterData.name}</h3>
        <p className="species">{characterData.species}</p>
      </Link>
    </li>
  );
}

export default CharacterCard;
