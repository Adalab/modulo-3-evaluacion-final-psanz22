const getCharactersFromAPI = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const parsedCharacters = data.results.map((character) => {
        return {
          name: character.name,
          id: character.id,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          episodes: character.episode.length,
          image: character.image,
        };
      });
      return parsedCharacters;
    });
};
export default getCharactersFromAPI;
