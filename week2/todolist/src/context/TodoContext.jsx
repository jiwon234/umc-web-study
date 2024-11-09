import { createContext } from "react";
import { useState, useContext } from "react";
// 데이터를 담고 있음 
export const TodoContext = createContext();

// 우산을 만듦. 
export function TodoContextProvider({ children }) {

  // 투두 리스트, 화면에 출력 되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기'}, 
    { id: 2, task:'어쩌구저쩌구'}
  ]);
  
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');
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

  // 1. 추가하기
  const addTodo = (text) => {
    setTodos((prev) =>[
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }; 

  // 3. 수정하기 (핵심)
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? {...item, task: text} : item))
    );
    setEditingId('');
    setEditText('');
  };

  return <TodoContext.Provider 
    value={{
      todos, 
      setTodos, 
      text, 
      setText, 
      editingId,
      setEditingId, 
      editText, 
      setEditText,
      handleSubmit,
      addTodo,
      deleteTodo, 
      updateTodo,
  }}>{children}</TodoContext.Provider>
} 