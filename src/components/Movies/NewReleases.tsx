import React from 'react';
import MovieCarousel from './MovieCarousel';

interface NewReleasesProps {
    movies: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }[];
}

const NewReleases: React.FC<NewReleasesProps> = ({ movies }) => {
  return (
    <div className="py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">New Release Movies</h2>
      <MovieCarousel movies={movies} />
    </div>
  );
};

export default NewReleases;
