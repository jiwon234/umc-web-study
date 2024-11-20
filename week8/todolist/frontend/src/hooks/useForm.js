import { useState } from 'react';

export function useForm({ initialValue }) {
  const [values, setValues] = useState(initialValue); // 변수명 'value'에서 'values'로 수정
  const [touched, setTouched] = useState({});

  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };
  const isFormValid = () => {
    return values.title.trim() !== ''; // title만 검사
  };



  return { values, touched, getTextInputProps, isFormValid };
}
