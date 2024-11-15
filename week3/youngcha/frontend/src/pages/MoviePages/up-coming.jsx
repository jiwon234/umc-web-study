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
import { useState } from "react";
import './movie-pagenation.css';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { axiosInstance } from "../../apis/axios-instance";


const UpComing = () => {

  const [page, setPage] = useState(1);

  const useGetUpComingMovies = async (page) => {
    const data = await axiosInstance.get(`/movie/upcoming?language=ko-KR&page=${page}`);
    console.log(data);
    return data;
  }
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['movies', page],
    queryFn: () => useGetUpComingMovies(page),
    keepPreviousData: true,
  });

  
  return (
    
    <div>
      <h1>개봉 예정 중인</h1>
      {isLoading ? (
        <S.MovieGridContainer>
          <CardListSkeleton number={20} />
        </S.MovieGridContainer>
         
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <S.MovieGridContainer>
          {data?.data?.results?.map((movie) => {
            return <MovieItem movie={movie} key={movie.id} />
          })
          }
        </S.MovieGridContainer>
      )}
      <div style={{display: 'flex', gap: '30px', justifyContent: 'center', width:'100%', marginTop: '30px'}}>
      <button className='page-btn'
        onClick={() => setPage(old => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        <FaAngleLeft />
      </button>
      <span>{page} 페이지</span>
      <button className='page-btn'
        onClick={() => {
          if (!isPreviousData) {
            setPage(old => old + 1)
          }
        }}
        // Disable the Next Page button until we know a next page is available
        // disabled={isPreviousData -}
      >
        <FaAngleRight/>
      </button>
      </div>
      
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
    
  )
}

export default UpComing;
