import React from "react";
import useCustomFetch from "../../hooks/useCustomFetch";
import MovieItem from "../../components/Card/Card";
import * as S from "../search/search.style";

const UpComing = () => {
  const {data:movies , isLoading, isError} = useCustomFetch('/movie/upcoming?language=ko-KR&page=1');
  
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
      <h1>개봉 예정중인</h1>
      <S.MovieGridContainer>
        {movies.data?.results.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </S.MovieGridContainer>
  </div>
  );
};

export default UpComing;