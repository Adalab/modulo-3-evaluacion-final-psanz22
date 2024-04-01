import CharacterCard from "./CharacterCard";
import "../scss/components/CharactersList.scss";

function CharactersList({ characters }) {
  return (
    <section>
      {characters.length > 0 ? (
        <ul>
          {characters.map((character) => (
            <CharacterCard key={character.id} characterData={character} />
          ))}
        </ul>
      ) : (
        <p>Ese personaje no existe en esta dimension.</p>
      )}
    </section>
  );
}

export default CharactersList;
