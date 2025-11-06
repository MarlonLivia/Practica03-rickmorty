import { useEffect, useState } from "react";
import { getEpisodes } from "../api/rickmorty";

export default function Entities() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getEpisodes().then(setEpisodes);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Episodios</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {episodes.map((ep) => (
          <div key={ep.id} className="bg-gray-100 rounded-xl p-4 shadow">
            <h3 className="font-bold text-lg">{ep.name}</h3>
            <p><strong>Fecha:</strong> {ep.air_date}</p>
            <p><strong>Código:</strong> {ep.episode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
