import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Movie } from '../../interfaces/Movie';

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(5); // Default for desktop

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

  useEffect(() => {
    // Adjust itemsPerRow based on screen width
    const updateItemsPerRow = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerRow(1); 
      else if (width < 768) setItemsPerRow(2); 
      else if (width < 1024) setItemsPerRow(3); 
      else if (width < 1280) setItemsPerRow(4); 
      else setItemsPerRow(5); 
    };

    updateItemsPerRow(); // Initial calculation
    window.addEventListener('resize', updateItemsPerRow);

    return () => window.removeEventListener('resize', updateItemsPerRow);
  }, []);

  return (
    <div className="relative">
      
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        >
          ◀
        </button>
      )}

 
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerRow) * 100}%)`,
          }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className={`flex-none px-2`} style={{ width: `${100 / itemsPerRow}%` }}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                genre={movie.genre_ids.join(', ')}
                rating={movie.vote_average}
                language={movie.original_language.toUpperCase()}
                format={movie.adult ? '18+' : 'PG'}
              />
            </div>
          ))}
        </div>
      </div>


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
