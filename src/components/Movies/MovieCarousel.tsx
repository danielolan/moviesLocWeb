import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../../interfaces/Movie'; // Importar el tipo Movie

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 5;

  const handleNext = () => {
    if (currentIndex + itemsPerRow < movies.length) {
      setCurrentIndex(currentIndex + itemsPerRow);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerRow >= 0) {
      setCurrentIndex(currentIndex - itemsPerRow);
    }
  };

  return (
    <div className="relative">
      {/* Botón izquierdo */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          ◀
        </button>
      )}

      {/* Carrusel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerRow) * 100}%)`,
          }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-1/5 px-2">
              <MovieCard
                title={movie.title}
                posterPath={movie.poster_path}
                genre={movie.genre_ids.join(', ')} // Esto es un ejemplo; mapea los géneros según tu lógica
                rating={movie.vote_average}
                language={movie.original_language.toUpperCase()}
                format={movie.adult ? '18+' : 'PG'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botón derecho */}
      {currentIndex + itemsPerRow < movies.length && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          ▶
        </button>
      )}
    </div>
  );
};

export default MovieCarousel;
