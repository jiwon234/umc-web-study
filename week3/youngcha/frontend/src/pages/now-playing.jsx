import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import './items.css';
import useCustomFetch from "../hooks/useCustomFetch";
import { useNavigate } from "react-router-dom";
const NowPlaying = () => {

  const navigate = useNavigate();

  const {data:movies , isLoading, isError} = useCustomFetch('/movie/now_playing?language=ko-KR&page=1');
  console.log(movies);

  if (isLoading) {
    return (
      <div>
        <h1 style={{color: "white"}}>로딩 중 입니다...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1 style={{color: "white"}}>에러 중...</h1>
      </div>
    )
  }


  return (
    <div>
      <h1>현재 상영중인</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
        {movies.data?.results.map((movie) => (
          <div key={movie.id} className='movie-item'>
            <img 
              className='movie-poster' 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              onClick={() => navigate(`/movies/${movie.id}`)}
              />
            <h5>{movie.title}</h5>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
  </div>
  );
};

export default NowPlaying;