import React, { useEffect, useState } from "react";
import { useMovies } from "../context/MovieContext";
import MovieCard from "../components/Movies/MovieCard";
import "../styles/MoviePage.css";
import { MainLayout } from "../layouts/MainLayout";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const MoviePage: React.FC = () => {
  const { genres, fetchGenres, moviesByGenre, fetchMoviesByGenre, searchMovies } =
    useMovies();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);

  useEffect(() => {
    if (genres.length > 0) {
      genres.forEach((genre) => {
        if (!moviesByGenre[genre.id]) {
          fetchMoviesByGenre(genre.id);
        }
      });
    }
  }, [genres, fetchMoviesByGenre, moviesByGenre]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = await searchMovies(query);
    setSearchResults(results);
  };

  return (
    <MainLayout>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col md:flex-row">
        {/* Menú de hamburguesa */}
        <div className="md:hidden p-4 flex justify-between items-center bg-gray-800">
          <h2 className="text-xl font-bold">Genres & Search</h2>
          <button
            className="text-white bg-gray-700 p-2 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AiOutlineClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Barra lateral responsiva */}
        <aside
          className={`fixed inset-y-0 left-0 bg-gray-800 w-64 p-6 overflow-y-auto transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:static md:translate-x-0 z-20`}
        >
          <h2 className="text-xl font-bold mb-6 hidden md:block">Search</h2>
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full px-4 py-2 mb-8 bg-gray-700 text-white rounded"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <h2 className="text-xl font-bold mb-4 hidden md:block">Genres</h2>
          <ul className="space-y-2">
            {genres.map((genre) => (
              <li
                key={genre.id}
                className="text-gray-400 hover:text-white cursor-pointer border-b border-gray-600 py-2"
                onClick={() => setSearchQuery("")} // Limpia la búsqueda al seleccionar un género
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 p-6 overflow-x-hidden">
          {searchQuery && searchResults.length > 0 ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Search Results for "{searchQuery}"
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {searchResults.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    posterPath={movie.poster_path}
                    genre=""
                    rating={movie.vote_average || 0}
                    language={movie.original_language?.toUpperCase() || "N/A"}
                    format={movie.adult ? "18+" : "PG"}
                  />
                ))}
              </div>
            </div>
          ) : searchQuery && searchResults.length === 0 ? (
            <p>No results found for "{searchQuery}".</p>
          ) : (
            genres.map((genre) => (
              <section key={genre.id} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{genre.name}</h2>
                <div className="relative">
                  <div
                    id={`carousel-${genre.id}`}
                    className="flex space-x-4 overflow-x-auto custom-scrollbar scroll-smooth px-8"
                  >
                    {moviesByGenre[genre.id]?.map((movie) => (
                      <div key={movie.id} className="flex-none w-48">
                        <MovieCard
                          id={movie.id}
                          title={movie.title}
                          posterPath={movie.poster_path}
                          genre=""
                          rating={movie.vote_average || 0}
                          language={movie.original_language.toUpperCase()}
                          format={movie.adult ? "18+" : "PG"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))
          )}
        </main>
      </div>
    </MainLayout>
  );
};

export default MoviePage;
