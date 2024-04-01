import { useState, useEffect } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import "../scss/App.scss";
import "../scss/core/reset.scss";
import getCharactersFromAPI from "../services/getCharactersFromAPI";
import CharactersList from "./CharactersList";
import Filters from "./filters/Filters";
import CharacterDetail from "./CharacterDetail";
import localStorageServices from "../services/localStorage";
import Logo from "../images/Logo.png";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState(
    localStorageServices.get("searchedCharacter", "")
  );

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

  useEffect(() => {
    localStorageServices.set("searchedCharacter", filterName);
  }, [filterName]);

  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const characterDetailRoute = matchPath("/character/:idCharacter", pathname);
  console.log("characterDetaileRoute", characterDetailRoute);

  const idCharacter = characterDetailRoute
    ? characterDetailRoute.params.idCharacter
    : null;
  console.log("idCharacter", typeof idCharacter);

  const characterDetailData = characters.find((character) => {
    return character.id === parseInt(idCharacter);
  });
  console.log("characterdetaildata", characterDetailData);

  return (
    <>
      <header>
        <h1>
          <img src={Logo} alt="Rick & Morty Logo" />
        </h1>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters onChangeName={onChangeName} filterName={filterName} />
                <CharactersList characters={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/character/:idCharacter"
            element={<CharacterDetail character={characterDetailData} />}
          />
        </Routes>
      </main>
      <footer> Waba Laba Dub Dub!!</footer>
    </>
  );
}

export default App;
