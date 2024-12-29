import React, { useEffect } from 'react'; 
import { useMovies } from '../context/MovieContext';
import MovieCard from '../components/Movies/MovieCard';
import '../styles/MoviePage.css';
import { MainLayout } from '../layouts/MainLayout'; // Asegúrate de que esto se usa correctamente

const ITEMS_PER_SCROLL = 3;
const ITEM_WIDTH = 192;

const MoviePage: React.FC = () => {
  const { genres, fetchGenres, moviesByGenre, fetchMoviesByGenre } = useMovies();

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    if (genres.length > 0) {
      genres.forEach((genre) => fetchMoviesByGenre(genre.id));
    }
  }, [genres, fetchMoviesByGenre]);

  return (
    <div className="flex bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Barra lateral */}
      <aside className="w-64 bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-6">Buscar</h2>
        <input
          type="text"
          placeholder="Palabras clave"
          className="w-full px-4 py-2 mb-8 bg-gray-700 text-white rounded"
        />

        <h2 className="text-xl font-bold mb-4">Géneros</h2>
        <ul className="space-y-2">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className="text-gray-400 hover:text-white cursor-pointer border-b border-gray-600 py-2"
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-x-hidden">
        {genres.map((genre) => (
          <section key={genre.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{genre.name}</h2>
            <div className="relative">
              {/* Botón Izquierdo */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full z-10"
                onClick={() => {
                  const container = document.getElementById(`carousel-${genre.id}`);
                  const scrollAmount = ITEM_WIDTH * ITEMS_PER_SCROLL;
                  container?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }}
              >
                ◀
              </button>

              {/* Contenedor de Carrusel */}
              <div
                id={`carousel-${genre.id}`}
                className="flex space-x-4 overflow-x-auto custom-scrollbar scroll-smooth px-8"
                style={{
                  maxWidth: 'calc(100vw - 256px)',
                  margin: '0 auto',
                }}
              >
                {moviesByGenre[genre.id]?.map((movie) => (
                  <div key={movie.id} className="flex-none w-48">
                    <MovieCard
                      title={movie.title}
                      posterPath={movie.poster_path}
                      genre=""
                      rating={movie.vote_average || 0}
                      language={movie.original_language.toUpperCase()}
                      format={movie.adult ? '18+' : 'PG'}
                    />
                  </div>
                ))}
              </div>

              {/* Botón Derecho */}
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full z-10"
                onClick={() => {
                  const container = document.getElementById(`carousel-${genre.id}`);
                  const scrollAmount = ITEM_WIDTH * ITEMS_PER_SCROLL;
                  container?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }}
              >
                ▶
              </button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default MoviePage;
