import { useState, useEffect } from 'react';
import { validateLogin } from '../utils/validate';

export function useForm({ initialValue, validate }) {
  const [values, setValues] = useState(initialValue); // 변수명을 'value'에서 'values'로 수정
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const handleChangeInput = (name, value) => {
    setValues ({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (name) => {
    setTouched({
      ...touched  ,
      [name]: true,
    });
  };

  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [validate, values]);

  return { values, errors, touched, getTextInputProps };
}

