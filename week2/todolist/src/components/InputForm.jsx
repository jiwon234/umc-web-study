import React, { useState } from 'react'; // 이거 까먹어서 오류 ;; 
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function InputForm() {
  const {
    text, 
    setText, 
    handleSubmit,
  } = useContext(TodoContext);

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        className='input-box' 
      />
      <button type='submit' className='btn'>할 일 등록
      </button>
  </form>
  )
}

export default InputForm;

