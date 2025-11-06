export async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data.results;
}

export async function getEpisodes() {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await res.json();
  return data.results;
}
