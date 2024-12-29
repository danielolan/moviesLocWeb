import React from 'react';
import { useMovies } from '../../context/MovieContext';
interface MovieCardProps {
  title: string;
  posterPath: string;
  genre: string;
  rating: number;
  language: string;
  format: string;
}
const MovieCard: React.FC<MovieCardProps> = ({
    title,
    posterPath,
    genre,
    rating = 0, // Valor predeterminado en caso de que no exista
    language,
    format,
  }) => {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg p-3 w-48">
        <img
          src={`https://image.tmdb.org/t/p/w200${posterPath}`}
          alt={title}
          className="w-full h-64 object-cover rounded-md mb-2"
        />
        <h3 className="text-white text-sm font-semibold">{title}</h3>
        <p className="text-gray-400 text-xs">{genre}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-1">
            <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">{format}</span>
            <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded">{language}</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <span className="text-xs">{rating.toFixed(1)}</span>
            <span className="ml-1">⭐</span>
          </div>
        </div>
      </div>
    );
  };
  

export default MovieCard;
