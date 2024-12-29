// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import NavBar from './components/Navbar/Navbar';
import { MovieProvider } from './context/MovieContext';

const App: React.FC = () => {
  return (
    <Router>
      <MovieProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          

          
        </Routes>
      </MovieProvider>
    </Router>
  );
};

export default App;
