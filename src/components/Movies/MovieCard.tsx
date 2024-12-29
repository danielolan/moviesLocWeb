import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  title: string;
  posterPath: string;
  genre: string;
  rating: number;
  language: string;
  format: string;
  id: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  posterPath,
  genre,
  rating = 0, // Valor predeterminado en caso de que no exista
  language,
  format,
}) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/movies/${id}`); // Navega a la página de detalles con el ID
  }
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-lg p-3 w-48 group overflow-hidden">
      {/* Imagen y contenido básico */}
      <img
        src={`https://image.tmdb.org/t/p/w200${posterPath}`}
        alt={title}
        className="w-full h-64 object-cover rounded-md mb-2"
      />
      <h3 className="text-white text-sm font-semibold">{title}</h3>
      <p className="text-gray-400 text-xs">{genre}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-1">
          <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
            {format}
          </span>
          <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">
            {language}
          </span>
        </div>
        <div className="flex items-center text-yellow-500">
          <span className="text-xs">{rating.toFixed(1)}</span>
          <span className="ml-1">⭐</span>
        </div>
      </div>

      {/* Hover content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
       
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-full mb-2 hover:bg-yellow-400 transition">
          Watch Now
        </button>
        <button onClick={handleDetailsClick} className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
          Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
