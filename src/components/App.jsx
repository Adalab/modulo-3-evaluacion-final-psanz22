import { useState, useEffect } from "react";
import "../scss/App.scss";
import "../scss/core/reset.scss";
import getCharactersFromAPI from "../services/getCharactersFromAPI";
import CharactersList from "./CharactersList";
import Filters from "./filters/Filters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  const onChangeName = (value) => {
    setFilterName(value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  useEffect(() => {
    getCharactersFromAPI().then((charactersData) => {
      setCharacters(charactersData);
      console.log(charactersData);
    });
  }, []);

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <Filters onChangeName={onChangeName} />
      </header>
      <main>
        <CharactersList characters={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
