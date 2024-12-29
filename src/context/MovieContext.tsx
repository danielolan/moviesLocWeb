import React, { createContext, useContext, useEffect, useState } from 'react';

// Tipos
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface Genre {
  id: number;
  name: string;
}

interface MovieContextProps {
  movies: Movie[];
  favorites: Movie[];
  genres: Genre[];
  moviesByGenre: { [key: number]: Movie[] };
  fetchMovies: () => Promise<void>;
  fetchGenres: () => Promise<void>;
  fetchMoviesByGenre: (genreId: number) => Promise<void>;
  toggleFavorite: (movie: Movie) => void;
}

// Contexto
const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [moviesByGenre, setMoviesByGenre] = useState<{ [key: number]: Movie[] }>({});

  // Cargar favoritos desde Local Storage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Guardar favoritos en Local Storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Fetch Popular Movies
  const fetchMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
        method: 'GET',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmUyNzNmYmExNDc5YmJlYmExYzVhZDU5NTU1YTEwNCIsIm5iZiI6MTczNTQzMjk1OS40MDk5OTk4LCJzdWIiOiI2NzcwOWFmZjdkMWJjODdkZTc2MTYyNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.98C5bF4sqCJZQQIOXpDsU2_PnNEXrOFhcU_BO8BLWFc`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Fetch Genres
  const fetchGenres = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
        method: 'GET',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmUyNzNmYmExNDc5YmJlYmExYzVhZDU5NTU1YTEwNCIsIm5iZiI6MTczNTQzMjk1OS40MDk5OTk4LCJzdWIiOiI2NzcwOWFmZjdkMWJjODdkZTc2MTYyNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.98C5bF4sqCJZQQIOXpDsU2_PnNEXrOFhcU_BO8BLWFc`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      const data = await response.json();
      setGenres(data.genres); // [{ id: 28, name: 'Action' }, { id: 35, name: 'Comedy' }, ...]
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  // Fetch Movies by Genre
  const fetchMoviesByGenre = async (genreId: number) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZmUyNzNmYmExNDc5YmJlYmExYzVhZDU5NTU1YTEwNCIsIm5iZiI6MTczNTQzMjk1OS40MDk5OTk4LCJzdWIiOiI2NzcwOWFmZjdkMWJjODdkZTc2MTYyNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.98C5bF4sqCJZQQIOXpDsU2_PnNEXrOFhcU_BO8BLWFc`,
            'Content-Type': 'application/json;charset=utf-8',
          },
        }
      );
      const data = await response.json();
      setMoviesByGenre((prev) => ({ ...prev, [genreId]: data.results }));
    } catch (error) {
      console.error(`Error fetching movies for genre ${genreId}:`, error);
    }
  };

  // Toggle Favorite Movie
  const toggleFavorite = (movie: Movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        favorites,
        genres,
        moviesByGenre,
        fetchMovies,
        fetchGenres,
        fetchMoviesByGenre,
        toggleFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Custom Hook
export const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovies must be used within a MovieProvider');
  }
  return context;
};
