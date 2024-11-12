import { useSearchParams } from "react-router-dom";
import * as S from "./search.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import '../../css/items.css';
import { SearchMovieList } from "../Movie/search-movie-list";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }
  const [searchParams, setSearchParams] = useSearchParams({
    mq: '',
  })

  const mq = searchParams.get('mq')

  const handleSearchMovie = () => {
    if (mq === searchValue) return;
    navigate(`/search?mq=${searchValue}`);
    console.log('hi');
  }
  const handleSearchMoviesWithKeyboard = (e) => {
    if (e.key === 'Enter') {
      handleSearchMovie();
    }
  }
  
  return (
    <>
      <S.SearchContainer>
        <input placeholder="영화 제목을 입력해주세요..." 
          value={searchValue} 
          onChange={onChangeSearchValue}
          onKeyDown={handleSearchMoviesWithKeyboard}/>
        <button onClick={handleSearchMovie}>검색</button>
      </S.SearchContainer>
      <SearchMovieList  />
    </>
  );
};

export default SearchPage;
 