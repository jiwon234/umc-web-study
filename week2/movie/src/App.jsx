import React from "react";
import { MOVIES } from "../api/movies";
import './App.css';

const App = () => {
  return (
    <div>
    <h1>Movie List</h1>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
      {MOVIES.results.map((movie) => (
        <div key={movie.id} className='movie-item'>
          <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default App;
