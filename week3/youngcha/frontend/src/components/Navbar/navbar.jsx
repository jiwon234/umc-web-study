import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "../../context/LoginContext.jsx";
import { useContext } from "react";

const StyledNavbar = styled.nav`
  display:flex;
  flex: row; 
  justify-content: space-between;
  background-color: #111;
  padding: 20px;
`;
const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  font-size: 24px;
  color: #FF0558;
`;
const StyledButton = styled.button`
  font-weight: none;
  text-decoration: none;
  font-size: 18px;
  color: white;
  background-color: ${props =>props.bgcolor|| 'black'};
  border: none;
  border-radius: 10px;
  padding: auto;
  width: 90px;
  height: 40px;

   &:hover {
    background-color: ${(props) => props.hovercolor || "#333"}; 
    cursor: pointer;
  }
`;
const Navbar = () => {
  const {
    isLoggedIn,
    setLoggedIn,
    userName,
  } = useContext(LoginContext);
  return (
    <StyledNavbar>
      <StyledLink to={'/'}>YOUNGCHA</StyledLink>
      <div style={{display: 'flex', flex:'row', gap: '10px', }}>
        {isLoggedIn ? (
          <>
            <p style={{alignContent: 'center'}}>{userName}님 반갑습니다.</p>
            <Link to={'/'}>
              <StyledButton onClick={() => {
                setLoggedIn(false);
                console.log(isLoggedIn);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                }}>로그아웃</StyledButton>
            </Link>
          </>
        ) : (
          <>
            <Link to={'/login'}>
            <StyledButton >로그인</StyledButton>
            </Link>
            <Link to={'/signup'}>
              <StyledButton bgcolor={'#FF0558'} hovercolor={"#FF7471"}>회원가입</StyledButton>
            </Link>
          </>
        ) }
        
        
      </div>
    </StyledNavbar>
  );
};

export default Navbar;