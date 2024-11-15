import './App.css'
import styled from 'styled-components';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginContextProvider } from './context/LoginContext';
import { useContext } from 'react';
import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

// 페이지들을 import
import HomePage from './pages/Home/home';
import NotFound from './pages/NotFound/not-found';
import Movies from './pages/Movies/movies';

// 루트 레이아웃
import RootLayout from './layout/root-layout';
import LoginPage from './pages/Login/login';
import SignupPage from './pages/SignUp/signup';
import SearchPage from './pages/Search/search';
import NowPlaying from './pages/MoviePages/now-playing';
import TopRated from './pages/MoviePages/top-rated';
import Popular from './pages/MoviePages/popular';
import UpComing from './pages/MoviePages/up-coming';
import MovieDetailPage from './pages/MovieDetail/moviedetail';
import { ReactQueryDevtools } from './../node_modules/@tanstack/react-query-devtools/src/index';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <HomePage />,
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: 'movies/now-playing',
        element: <NowPlaying />
      },
      {
        path: 'movies/popular',
        element: <Popular />
      },
      {
        path: 'movies/top-rated',
        element: <TopRated />
      },
      {
        path: 'movies/up-coming',
        element: <UpComing />
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetailPage />,
      }
    ]
  }
])

const queryClient = new QueryClient()
function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <LoginContextProvider>
        <RouterProvider router={router}/>
      </LoginContextProvider>
      <ReactQueryDevtools initialIsOpen={false}/> 
    </QueryClientProvider>
    </>
  )
}

export default App
