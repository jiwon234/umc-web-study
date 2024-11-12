import * as S from "../search/search.style.js";
import { useSearchParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import CardSkeleton from "../../components/Skeleton/card-skeleton.jsx";
import MovieDetailPage from "../moviedetailpage.jsx";
import CardListSkeleton from "../../components/Skeleton/card-list-skeleton.jsx";

export const SearchMovieList = () => {
  const [searchParams, setSearchParams] = useSearchParams({mq: '',});
  const mq = searchParams.get('mq');
  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
  const {data: movies, isLoading, isError} = useCustomFetch(url);
  
  if (isError) {
    return <h1 style={color}>에러 발생</h1>
  }
  if (isLoading) {
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
  </S.MovieGridContainer>
  )
}
