import React, { useState } from 'react'; // 이거 까먹어서 오류 ;; 
import { useForm } from '../hooks/useForm';
import axios from 'axios';
function InputForm() {
  const todo = useForm({
    initialValue: {
      title: '',
      content: '',
    },
  })
  console.log(todo.getTextInputProps);
  const handlePressAddTodo = async (e) => {
    // e.preventDefault();
    if (!todo.isFormValid()) {
      alert('빈 필드가 있습니다. 모두 입력해주세요.');
      return;
    }
    try {
      // 회원가입 요청
      const response = await axios.post('http://localhost:3000/todo', {
        title: todo.values.title,
        content: todo.values.content,
      });
  
      // 응답 처리
      console.log(response.data); // 응답 메시지 출력 (회원가입 성공 메시지 등)
      alert('데이터 응답을 받았습니다. ');  

    } catch (error) {
      // 에러 처리
      console.error('오류:', error.response?.data || error);
      alert(error.response?.data?.message || '실패했습니다.');
    }
  };

  return (
    <form onSubmit={handlePressAddTodo} style={{display:'flex', flexDirection:'column', width:'300px', gap: '2px'}}>
      <input 
        type='text' 
        className='input-box' 
        placeholder='제목을 입력해주세요.'
        {...todo.getTextInputProps('title')}
      />
      <input 
        type='text' 
        className='input-box' 
        placeholder='내용을 입력해주세요.'
        {...todo.getTextInputProps('content')}
      />
      <button type='submit' className='btn'>할 일 등록
      </button>
  </form>
  )
}

export default InputForm;

