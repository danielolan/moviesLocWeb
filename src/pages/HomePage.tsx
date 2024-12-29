import React, { useEffect, useState } from "react";
import NewReleases from "../components/Movies/NewReleases";
import { useMovies } from "../context/MovieContext";
import MainLayout from "../layouts/MainLayout";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const { movies, fetchMovies,openModal} = useMovies();
  const [featuredMovie, setFeaturedMovie] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    if (movies.length > 0) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setFeaturedMovie(randomMovie);
    }
  }, [movies]);

  return (
    <MainLayout>
      <Helmet>
        <title>Home - MOVIESLOC</title>
        <meta name="description" content="Discover the latest movies and enjoy unlimited entertainment with MOVIESLOC." />
        <meta name="keywords" content="movies, entertainment, watch, cinema, trailers" />
      </Helmet>
      <div className="bg-gray-900 text-white">
        {featuredMovie && (
          <section
            className="relative min-h-screen flex items-center justify-between px-8 md:px-20 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 max-w-2xl space-y-4">
              <h1 className="text-5xl font-bold">{featuredMovie.title}</h1>
              <p className="text-gray-300">{featuredMovie.overview}</p>
              <div className="flex gap-4 mt-4">
                <span className="bg-gray-800 px-3 py-1 rounded">
                  {featuredMovie.vote_average.toFixed(1)} ⭐
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded">
                  {featuredMovie.release_date}
                </span>
              </div>
                <div className="flex gap-4">
                <button
                  onClick={() => navigate(`/movies/${featuredMovie.id}`)}
                  className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition"
                >
                  View Details
                </button>
                <button           onClick={() => openModal("https://www.youtube.com/embed/dQw4w9WgXcQ")} // Cambia el enlace por el del tráiler
 className="mt-6 bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition">
                  Watch Now
                </button>
                </div>
            </div>
            <div className="relative z-10">
              <img
                src={`https://image.tmdb.org/t/p/w300${featuredMovie.poster_path}`}
                alt={featuredMovie.title}
                className="rounded-lg shadow-lg"
              />
            </div>
          </section>
        )}
        <div className="m-6 p-6">
          <NewReleases movies={movies} />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
