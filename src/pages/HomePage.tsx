import React, { useEffect } from 'react';
import NewReleases from '../components/Movies/NewReleases';
import { useMovies } from '../context/MovieContext';

const HomePage: React.FC = () => {
  const { movies, fetchMovies } = useMovies();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="bg-gray-900 text-white">
      {/* Banner Principal */}
      <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://tecnautas.cl/wp-content/uploads/2023/01/peliculas.jpeg')` }}></div>
        <div className="relative z-10 max-w-5xl mx-auto p-6">
          <h1 className="text-5xl font-bold leading-tight">
            Movflx <span className="text-yellow-500">Unlimited Movie, TV Shows, & More.</span>
          </h1>
          <div className="flex gap-4 mt-4">
            <span className="bg-gray-800 px-3 py-1 rounded">PG18</span>
            <span className="bg-gray-800 px-3 py-1 rounded">HD</span>
            <span className="text-gray-400">Romance, Drama</span>
            <span className="text-gray-400">2021</span>
            <span className="text-gray-400">128 min</span>
          </div>
          <button className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition">
            Watch Now
          </button>
        </div>
      </section>

      <div className="m-6 p-6">
        <NewReleases movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;
