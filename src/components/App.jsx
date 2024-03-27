import { useState, useEffect } from "react";
import "../scss/App.scss";
import "../scss/core/reset.scss";
import getCharactersFromAPI from "../services/getCharactersFromAPI";
import CharactersList from "./CharactersList";

function App() {
  const [characters, setCharacters] = useState([]);

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
      </header>
      <main>
        <CharactersList characters={characters} />
      </main>
    </>
  );
}

export default App;
