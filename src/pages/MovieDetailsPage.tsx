import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useMovies } from "../context/MovieContext";
interface MovieDetails {
    title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    runtime: number;
    genres: { id: number; name: string }[];
    vote_average: number;
    tagline: string;
    homepage: string;
    production_companies: { name: string; logo_path: string | null }[];
    revenue: number;
    budget: number;
}

const MovieDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
    const { favorites, toggleFavorite } = useMovies(); // Importamos favoritos y el método para manejarlos

    console.log(movieDetails)
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
            <div
                className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
                }}
            >
                <div className="container mx-auto px-8 py-16">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        {/* Póster */}
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                            className="w-80 rounded-lg shadow-lg"
                        />

                        {/* Detalles */}
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold mb-4">{movieDetails.title}</h1>
                            <p className="text-lg text-yellow-400 italic mb-4">
                                {movieDetails.tagline}
                            </p>
                            <div className="flex flex-wrap gap-4 mb-6">
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
                            <div className="flex flex-wrap gap-2 mb-6">
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
                            <div className="flex gap-4">
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
                                    className={`${favorites.some((fav) => fav.id === movieDetails.id) ? 'bg-yellow-500' : 'bg-gray-800'
                                        } text-white px-6 py-2 rounded hover:bg-yellow-400 transition`}
                                >
                                    {favorites.some((fav) => fav.id === movieDetails.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Información adicional */}
                    <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
