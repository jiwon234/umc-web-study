import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './moviedetail.css';
const MovieDetailPage = () => {
  const { movieId } = useParams(); // movieId라는 키를 URL에서 추출함.

  const [movie, setMovie] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [credits, setCredits] = useState([]); 

  // console.log(movie);

  // movieId가 변경될 때마다 이 effect가 실행됨. movieId는 두번째 인자로 들어간다. 
  useEffect(() => {
    const getMovie = async () => {
      try {
        // !!! hook 사용해서 단순화해놓기 
        // 1. movie 데이터를 불러오는 부분
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsIm5iZiI6MTcyNjE0MTU3Ny42MDM2ODcsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cFPsPRHPidq2OnJ3U-3wHJYhnGajDFqUsM8XJ_a_0bw`,
          },
        });
        setMovie(response.data); 
        

        // 2. credit 데이터 불러오는 부분 
        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNkYWIyMDkxMzI2Y2Y3NTkwNTAwYjQyODNkNjZkNyIsIm5iZiI6MTcyNjE0MTU3Ny42MDM2ODcsInN1YiI6IjY0MzVmY2Y2NjUxZmNmMDBkM2RhYzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cFPsPRHPidq2OnJ3U-3wHJYhnGajDFqUsM8XJ_a_0bw`,
          },
        });
        setCredits(creditsResponse.data.crew); 
      
      } catch (error) {
        
      } finally {
        setLoading(false); // 로딩 완료 상태로 전환 
      }
    };

    if (movieId) {
      getMovie(); 
    }
  }, [movieId]); // movieId가 변경될 때마다 effect가 실행

  
  return (
    <>
      {movie ? (
        <>
          {/*1. 영화 정보 */}
          <div style={{
             backgroundImage: `linear-gradient(to right, #1A1A1A 30%, transparent), url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
             backgroundRepeat: "no-repeat",
             backgroundSize:"100%",
             borderRadius: "8px",
             padding: "30px",
             minHeight: "400px" 
            }}>
            <div style={{width: "40%"}}>
              <h1>{movie.title}</h1>
              <p style={{color: "#DEDEDE"}}>평균 {movie.vote_average}</p>
              <p style={{color: "#DEDEDE"}}>{movie.release_date.slice(0, 4)}</p>
              <p style={{color: "#DEDEDE"}}>{movie.runtime}분</p>
              
              <p style={{marginTop: "20px", color: "#DEDEDE"}}>{movie.overview}</p>
            </div>
          </div>
          
          <hr style={{width: "40%"}}/>
          {/*2. 크레딧 정보 */}
          <div style={{ width: "100%", padding: "30px", }}>
            <h1 style={{marginBottom: "30px"}}>감독/출연</h1>
            <ul style={{display:"flex", flex:"row", flexWrap:"wrap", gap: "40px"}}>
              
              {credits.map((credit) => (
                //프로필 
                <li key={credit.id} style={{ display: "flex", flexDirection: 'column', marginBottom: "10px" }}>
                  <div className="profile-img" >
                    {credit.profile_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`}
                        alt={credit.name}
                        className="profile-img-img"
                      />
                    )}
                  </div>
                  <p style={{width: "100px", fontWeight: "bold", marginTop:"10px"}}>{credit.name}</p>
                  <p style={{width: '100px', color:"#999999"}}>{credit.job}</p> {/* 감독과 출연자 이름과 직업 표시 */}
                </li>
              ))}

            </ul>
          </div>
        </>
        
      ) : (
        <p>영화 정보를 불러오는 중입니다...</p>
      )}
    </>
  );
}

export default MovieDetailPage;
