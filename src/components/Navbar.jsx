import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">🛸 Rick & Morty</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-green-400">Inicio</Link>
        <Link to="/entities" className="hover:text-green-400">Episodios</Link>
      </div>
    </nav>
  );
}
