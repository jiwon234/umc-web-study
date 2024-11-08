const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

function validateUser(values) {
  const errors = {
    name:'',
    email: '',
    password: '',
    confirmpassword:'',

  }
  
  if (emailPattern.test(values.email) === false) {
    errors.email = '올바른 이메일 형식이 아닙니다. 다시 확인해주세요!';
  }

  if (values.password.length < 8 || values.password.length > 16) {
    errors.password = '비밀번호는 8~16자 사이로 입력해주세요!';
  }
  if (values.name == false) {
    errors.name = '이름은 필수 입력 요소입니다.'
  }
  if (values.confirmpassword == false) {
    errors.confirmpassword = '비밀번호 검증은 필수 입력 요소입니다.'
  }
  if (values.confirmpassword != values.password) {
    errors.confirmpassword = '비밀번호가 일치하지 않습니다.'
  }

  return errors;
}

function validateLogin(values) {
  return validateUser(values);
}

export { validateLogin };