export default function CharacterCard({ character }) {
  return (
    <div className="bg-gray-800 text-white rounded-xl p-4 shadow-md text-center">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-xl mb-2"
      />
      <h3 className="font-bold">{character.name}</h3>
      <p>{character.species}</p>
      <p className="text-sm text-gray-400">{character.status}</p>
    </div>
  );
}
