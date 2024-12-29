import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import { MovieProvider } from './context/MovieContext';
import MovieDetailsPage from './pages/MovieDetailsPage';
import FavoritesPage from './pages/FavoritePage';
import './index.css';
import AboutPage from './pages/AboutPage';
const App: React.FC = () => {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} /> {/* Ruta dinámica */}
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </MovieProvider>
  );
};

export default App;
