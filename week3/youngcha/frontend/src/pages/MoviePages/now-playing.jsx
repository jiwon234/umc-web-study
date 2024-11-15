import React from "react";
import useCustomFetch from "../../hooks/useCustomFetch";
import MovieItem from "../../components/Card/Card";
import * as S from "../search/search.style";

const NowPlaying = () => {

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
    <>
      <h1>현재 상영중인</h1>
      <S.MovieGridContainer>
        {movies.data?.results.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </S.MovieGridContainer>
  </>
  );
};

export default NowPlaying;