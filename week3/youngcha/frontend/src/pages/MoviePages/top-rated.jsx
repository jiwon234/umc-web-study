import React from "react";
import useCustomFetch from "../../hooks/useCustomFetch";
import { useNavigate } from "react-router-dom";
import MovieItem from "../../components/Card/Card";
import * as S from "../search/search.style";

const TopRated = () => {

  const {data:movies , isLoading, isError} = useCustomFetch('/movie/top_rated?language=ko-KR&page=1');

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
    <>
      <h1>높은 평가를 받은</h1>
      <S.MovieGridContainer>
        {movies.data?.results.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </S.MovieGridContainer>
    </>
  );
};

export default TopRated;
