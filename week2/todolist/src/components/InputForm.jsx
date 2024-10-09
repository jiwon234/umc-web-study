import React, { useState } from 'react'; // 이거 까먹어서 오류 ;; 

function InputForm({ addTodo }) {

  const [text, setText] = useState('');

  // 렌더링 방지
  const handleSubmit = (e) => {
    if (!text.trim()) {
      return; // 공백일 경우 함수를 종료
  }
    e.preventDefault();
    addTodo(text);
    setText(''); 
  }

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