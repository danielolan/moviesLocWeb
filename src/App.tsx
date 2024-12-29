// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import NavBar from './components/Navbar/Navbar';
import { MovieProvider } from './context/MovieContext';
import MovieDetailsPage from './pages/MovieDetailsPage';
import FavoritesPage from './pages/FavoritePage';
const App: React.FC = () => {
  return (
    <Router>
      <MovieProvider>
        
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} /> {/* Ruta dinámica */}
          <Route path="/favorites" element={<FavoritesPage />} />

          

          
        </Routes>
      </MovieProvider>
    </Router>
  );
};

export default App;
