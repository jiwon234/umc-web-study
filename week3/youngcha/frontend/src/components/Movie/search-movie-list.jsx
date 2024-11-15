import * as S from "../../pages/Search/search.style.js";
import { useSearchParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import CardSkeleton from "../Skeleton/card-skeleton.jsx";
import MovieDetailPage from "../../pages/MovieDetail/moviedetail.jsx";
import MovieItem from "../MovieItem/MovieItem.jsx";
import CardListSkeleton from "../Skeleton/card-list-skeleton.jsx";
import { useState } from "react";
import { useEffect } from "react";

export const SearchMovieList = () => {
  const [searchParams, setSearchParams] = useSearchParams({mq: '',});
  const [isSearching, setIsSearching] = useState(false);
  const mq = searchParams.get('mq');
  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
  const {data: movies, isLoading, isError} = useCustomFetch(url);
  
  useEffect(() => { // 입력값이 있을 때
    if (mq) setIsSearching(true);
  }, [mq]); 
  useEffect(() => { // 로딩 중이 아닐 때
    if (!isLoading) setIsSearching(false);
  }, [isLoading]);


  if (isError) {
    return <h1 style={color}>에러 발생</h1>
  }
  if (isSearching) {
    return (
      <S.MovieGridContainer>
        <CardListSkeleton number={20}/>
      </S.MovieGridContainer>
    )
  }
  if (mq && movies.data?.results.length === 0) {
    return (
      <div style={{textAlign: 'center', marginTop: '30px'}}>
        <h1 style={{color: 'white'}}>해당하는 검색어 {mq}에</h1>
        <h1 style={{color: 'white'}}>해당하는 데이터가 없습니다.</h1>
      </div>
    )
  }
  console.log(movies);
  return (
    <S.MovieGridContainer>
      {movies.data?.results.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </S.MovieGridContainer>
  )
}
