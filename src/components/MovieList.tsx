import React, { useEffect } from 'react';
import { useMovies } from '../context/MovieContext';

const MovieList = () => {
  const { movies, fetchMovies } = useMovies();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-2 rounded bg-gray-800">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded"
            />
            <h3 className="text-lg mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
