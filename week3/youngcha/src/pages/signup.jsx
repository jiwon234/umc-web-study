import { useState, useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from '../hooks/useForm';
import { validateLogin } from '../utils/validate';
import styled from 'styled-components';

const SignUpPage = () => {

  const [isValid, setIsValid] = useState(false);

  const login = useForm({
    initialValue: {
      name:'',
      email:'',
      password:'',
      confirmpassword:''
    },
    validate: validateLogin
  })

  console.log(login.getTextInputProps);
  
  const handlePressLogin = () => {
    console.log(login.values.name, login.values.email, login.values.password, login.values.confirmpassword);
  }

  // 로그인 버튼 활성화
  useEffect(() => {
    if (
      login.values.name &&
      login.values.email &&
      login.values.password &&
      login.values.confirmpassword == login.values.password
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [login.values]); // login.values 변경될 때마다 실행

 
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
        <h1 style={{marginBottom: "30px"}}>회원가입</h1>
        <div style={{marginBottom: '10px'}}>
        <Input 
            error = {login.touched.name && login.errors.name}
            type={'text'}
            placeholder={"이름을 입력해주세요!"} 
            {...login.getTextInputProps('name')}
            className="input-box" 
          />
        {login.touched.name && login.errors.name && <p className='error-message'>{login.errors.name}</p>}
        </div>
        <div style={{display: 'flex', gap: '20px',marginBottom: '20px'}}>
          <div>
            <input type='radio' name='sex' value='woman' id='woman'/> 
            <label htmlFor="woman" style={{marginLeft:'5px'}}>여성</label>
          </div>
          <div>
            <input type='radio' name='sex' value='man' id='man'/> 
            <label htmlFor="man" style={{marginLeft:'5px'}}>남성</label>
          </div>
          <div>
            <input type='radio' name='sex' value='none' id='none'/> 
            <label htmlFor="none" style={{marginLeft:'5px'}}>선택하지 않음</label>
          </div>
        </div>
        <div style={{marginBottom: '20px'}}>
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
        <div style={{marginBottom: '20px'}}>
        <Input 
            error = {login.touched.confirmpassword && login.errors.confirmpassword}
              type={'password'}
              placeholder={"비밀번호를 다시 입력해주세요!"} 
              {...login.getTextInputProps('confirmpassword')}
              className="input-box" 
            />
            {login.touched.confirmpassword && login.errors.confirmpassword && <p className='error-message'>{login.errors.confirmpassword}</p>}
        </div>
        
        <button className="login-btn" disabled={!isValid} onClick={handlePressLogin}>로그인</button>
      </div>
    
    </>
  );
};

export default SignUpPage;

const Input = styled.input `
  border: 1px solid #ccc;
  border: ${props => props.error ? '2px solid red': '1px solid #ccc'};
`;