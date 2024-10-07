import React, { useState } from 'react'; // 이거 까먹어서 오류 ;; 

function InputForm({ addTodo }) {

  const [text, setText] = useState('');

  // 렌더링 방지
  const handleSubmit = (e) => {
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
      />
      <button type='submit'>할 일 등록
      </button>
  </form>
  )
}

export default InputForm;