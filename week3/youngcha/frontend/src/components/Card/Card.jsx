// src/components/MovieItem.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './items.css';

const MovieItem = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-item" onClick={() => navigate(`/movies/${movie.id}`)}>
      <img 
        className="movie-poster" 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
      />
      <h5>{movie.title}</h5>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieItem;