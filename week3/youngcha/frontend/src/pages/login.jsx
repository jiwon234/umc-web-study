import '../css/login.css';
import * as yup from 'yup';
import { useForm } from '../hooks/useForm';
import { validateLogin } from '../utils/validate';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import { useContext } from 'react';


const LoginPage = () => {

  const {
    isLoggedIn,
    setLoggedIn,
    userName,
    setUserName,
  } = useContext(LoginContext);

  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  
  const login = useForm({
    initialValue: {
      email:'',
      password:''
    },
    validate: validateLogin
  })

  // 로그인 버튼 활성화
  useEffect(() => {
    if (
      login.values.email &&
      // 길이조건 만족하면 valid로 처리되도록 했는데, 
      // 기존에 짜둔 로직을 활용하는 방식으로 해보고싶음... 
      login.values.password.length >= 4 &&
      login.values.password.length <= 16
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [login.values]); // login.values 변경될 때마다 실행


  console.log(login.getTextInputProps);
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    // 로그인 값 출력해서 확인
    console.log(login.values);
  
    try {
      // POST 방식으로 로그인 요청 보내기
      const response = await axios.post('http://localhost:3000/auth/login', {
        email: login.values.email,
        password: login.values.password,
      });
  
      // 로그인 성공 시, 토큰을 localStorage에 저장
      const { accessToken, refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
  
      setLoggedIn(true);
      console.log(isLoggedIn);
      
      const userNameFromEmail = login.values.email.split('@')[0];
      setUserName(userNameFromEmail);

      console.log(userNameFromEmail);
      alert('로그인에 성공했습니다!');

      navigate('/');

    } catch (error) {
      // 에러 처리
      console.error('로그인 오류:', error.response?.data || error);
      alert(error.response?.data.message || '로그인에 실패했습니다.');
    }
  };
  
  return (
    <>
      <div style={{
      padding: "20px",
      paddingTop: "100px",
      display: "flex", 
      flexDirection: "column", 
      alignItems:"center",
      gap:"10px",
      }}>
        <h1 style={{marginBottom: "30px"}}>로그인</h1>
        <div>
          <Input 
            error = {login.touched.email && login.errors.email}
            type={'email'}
            placeholder={"이메일을 입력해주세요!"} 
            {...login.getTextInputProps('email')}
            className="input-box" 
          />
          {login.touched.email && login.errors.email && <p className='error-message'>{login.errors.email}</p>}
        </div>
        <div>
          <Input 
            error = {login.touched.password && login.errors.password}
              type={'password'}
              placeholder={"비밀번호를 입력해주세요!"} 
              {...login.getTextInputProps('password')}
              className="input-box" 
            />
            {login.touched.password && login.errors.password && <p className='error-message'>{login.errors.password}</p>}
        </div>
        <button className="login-btn" disabled={!isValid} onClick={handleLogin}>로그인</button>
      </div>
    </>
  );
};

export default LoginPage;

const Input = styled.input `
  border: 1px solid #ccc;
  border: ${props => props.error ? '2px solid red': '1px solid #ccc'};
`;