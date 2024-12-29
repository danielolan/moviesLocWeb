import React from 'react';
import MovieCarousel from './MovieCarousel';
import { Movie } from '../../interfaces/Movie';
interface NewReleasesProps {
  movies: Movie[];
}

const NewReleases: React.FC<NewReleasesProps> = ({ movies }) => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Popular Movies</h2>
      <MovieCarousel movies={movies} />
    </div>
  );
};

export default NewReleases;
