import { useEffect, useState } from "react";
import { getCharacters } from "../api/rickmorty";
import CharacterCard from "../components/CharacterCard";
import Hero from "../components/Hero";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <div className="p-6">
      <Hero />
      <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Personajes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map((ch) => (
          <CharacterCard key={ch.id} character={ch} />
        ))}
      </div>
    </div>
  );
}
