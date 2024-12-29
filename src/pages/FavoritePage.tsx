import React from 'react';
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/Movies/MovieCard';
import MainLayout from '../layouts/MainLayout';
import { AiOutlineHeart } from 'react-icons/ai'; // Importamos el ícono desde React Icons

const FavoritePage: React.FC = () => {
  const { favorites } = useMovies();

  return (
    <MainLayout>
      <div className="bg-gray-900 text-white min-h-screen p-6">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-5xl font-bold mb-4">My Favorites</h1>
          <p className="text-gray-400 text-lg">
            A collection of your most loved movies.
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            {/* Ícono React Icon */}
            <AiOutlineHeart className="text-yellow-500 w-20 h-20 mb-4" />
            <p className="text-gray-400 text-lg">No favorites added yet.</p>
            <button
              onClick={() => (window.location.href = '/movies')} // Redirige al usuario a explorar películas
              className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition"
            >
              Discover Movies
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {favorites.map((movie) => (
              <div key={movie.id} className="relative group">
                {/* MovieCard */}
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  genre=""
                  rating={movie.vote_average || 0}
                  language={movie.original_language?.toUpperCase() || 'N/A'}
                  format={movie.adult ? '18+' : 'PG'}
                />
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <button
                    onClick={() => (window.location.href = `/movies/${movie.id}`)}
                    className="bg-yellow-500 text-black px-4 py-2 rounded-full mb-2 hover:bg-yellow-400 transition"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => {
                      alert('Remove favorite functionality pending!');
                    }}
                    className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default FavoritePage;
