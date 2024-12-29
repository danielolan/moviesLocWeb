import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useMovies } from "../context/MovieContext";
import { Helmet } from "react-helmet-async";
import { Movie } from "../interfaces/Movie";

interface MovieDetails extends Movie {
  genres: { id: number; name: string }[];
  production_companies: { name: string; logo_path: string | null }[];
  revenue: number;
  budget: number;
  homepage: string;
  runtime: number;
  tagline: string;
}

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const { favorites, toggleFavorite, openModal } = useMovies();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmUyNzNmYmExNDc5YmJlYmExYzVhZDU5NTU1YTEwNCIsIm5iZiI6MTczNTQzMjk1OS40MDk5OTk4LCJzdWIiOiI2NzcwOWFmZjdkMWJjODdkZTc2MTYyNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.98C5bF4sqCJZQQIOXpDsU2_PnNEXrOFhcU_BO8BLWFc`,
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <MainLayout>
      <Helmet>
        <title>{`${movieDetails.title} - MOVIESLOC`}</title>
        <meta name="description" content={movieDetails.overview} />
      </Helmet>

      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
        }}
      >
        <div className="container mx-auto px-6 md:px-8 py-10 md:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            {/* Póster */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="w-full sm:w-64 md:w-80 rounded-lg shadow-lg mx-auto lg:mx-0"
            />

            {/* Detalles */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {movieDetails.title}
              </h1>
              <p className="text-yellow-400 italic mb-4">{movieDetails.tagline}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">
                  {movieDetails.vote_average.toFixed(1)} ⭐
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">
                  {movieDetails.runtime} mins
                </span>
                <span className="bg-gray-800 px-3 py-1 rounded text-sm">
                  {new Date(movieDetails.release_date).toLocaleDateString()}
                </span>
              </div>
              <p className="mb-6 leading-relaxed text-gray-300">
                {movieDetails.overview}
              </p>

              {/* Géneros */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                {movieDetails.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href={movieDetails.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition"
                >
                  Sitio Oficial
                </a>
                <button
                  onClick={() => toggleFavorite(movieDetails)}
                  className={`${
                    favorites.some((fav) => fav.id === movieDetails.id)
                      ? "bg-yellow-500"
                      : "bg-gray-800"
                  } text-white px-6 py-2 rounded hover:bg-yellow-400 transition`}
                >
                  {favorites.some((fav) => fav.id === movieDetails.id)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </button>
                <button
                  onClick={() =>
                    openModal("https://www.youtube.com/embed/dQw4w9WgXcQ")
                  }
                  className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition"
                >
                  Watch Movie
                </button>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Budget</h3>
                <p>${movieDetails.budget.toLocaleString()}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                <p>${movieDetails.revenue.toLocaleString()}</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Production Companies</h3>
              <div className="flex flex-wrap gap-4">
                {movieDetails.production_companies.map((company) => (
                  <div key={company.name} className="flex items-center">
                    {company.logo_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                        alt={company.name}
                        className="w-12 h-12 object-contain bg-white p-2 rounded mr-2"
                      />
                    ) : (
                      <span className="text-gray-500">{company.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MovieDetailsPage;
