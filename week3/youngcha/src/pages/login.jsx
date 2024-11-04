import './login.css';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required('이메일을 반드시 입력해주세요.'),
    password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 반드시 입력해주세요.'),
  })

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
      mode: "onTouched", // 입력창 클릭 후 포커스를 잃으면 검사
      // mode: "all" : 가장 엄격한 유효성 검사 모드. 실시간으로 검사
      resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
      console.log('폼 데이터 제출')
      console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <input 
          type="email"
          {...register("email")}
          placeholder="이메일을 입력해주세요!" 
          className="input-box" 
          
        />
        <p className="error-message" style={{color:'red'}}>{errors.email?.message}</p>
        </div>
       
        <div>
          <input 
            type="password" 
            {...register("password")}
            placeholder="비밀번호를 입력해주세요!" 
            className="input-box" 
          />
          <p className="error-message" style={{color:'red'}}>{errors.password?.message}</p>
        </div>
        <input 
          type="submit" 
          disabled={!isValid}
          className="login-btn" 
          value="로그인"
        />
      </div>
    </form>
    
    </>
  );
};

export default LoginPage;
