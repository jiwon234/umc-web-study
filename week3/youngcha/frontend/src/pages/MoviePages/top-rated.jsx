import React, { useEffect } from "react";
import useCustomFetch from "../../hooks/useCustomFetch";
import MovieItem from "../../components/MovieItem/MovieItem";
import * as S from "../Search/search.style";
import { useGetMovies } from "../../hooks/queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";
import CardListSkeleton from "../../components/Skeleton/card-list-skeleton";
import { useGetInfiniteMovies } from "../../hooks/useGetInfiniteMovies";
import {useInView} from "react-intersection-observer";
import ClipLoader from "react-spinners/ClipLoader";
const TopRated = () => {

  const {data: movies,
    isLoading,
    isFetching,
    hasNextPage,
    isPending,
    fetchNextPage,
    isFetchingNextPage,
    error,
    isError
  } = useGetInfiniteMovies('top_rated');

  console.log(movies);
  const {ref, inView} = useInView({
    threshold: 0,
  });

  useEffect(()=> {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage]);
  // isPending: 데이터를 불러오는 중 입니다. 데이터가 로딩중일 때 isPending
  // isLoading: 데이터를 불러오는 중이거나, 재시도 중일 때 true
   
  /*
  if (isPending) {
    return (
      <S.MovieGridContainer>
        <CardListSkeleton number={20}/>
      </S.MovieGridContainer>
    )
  }

  if (isError) {
    return (
      <div>
        <h1 style={{color: "white"}}>에러 중...</h1>
      </div>
    )
  }
`*/

  return (
    <>
      <h1>높은 평가를 받은</h1>
      <S.MovieGridContainer>
        {/*flat을 활용해 코드 단순화 한 방법*/}
        {movies?.pages
          ?.map(page => page.results)
          ?.flat()
          ?.map((movie, _) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        {/*{movies?.pages.map((page) => {
          return page.results.map((movie, _) => {
            return <MovieItem movie={movie} key={movie.id} />
          })
        })}*/}

        {isFetching && <CardListSkeleton number={20} />}
      </S.MovieGridContainer>
      <div ref={ref} style={{marginTop: '50px', display: 'flex', justifyContent: 'center', width: '100%'}}>
        {isFetching && <ClipLoader color={'#fff'}/>}
      </div>
  </>
  );
};

export default TopRated;
