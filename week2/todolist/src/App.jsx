import './App.css'
import { useState } from 'react';
import InputForm from './components/InputForm';
import Todo from './components/Todo';

function App() {
  // 투두 리스트, 화면에 출력 되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기'}, 
    { id: 2, task:'어쩌구저쩌구'}
  ]);
  
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

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
  };

  return (
    <>
      <InputForm addTodo={addTodo} />
      <div>
        {todos.map((todo, _) =>
          <Todo 
            key = {todo.id}
            todo = {todo}
            editingId = {editingId}
            setEditingId = {setEditingId}
            editText = {editText}
            setEditText = {setEditText}
            deleteTodo = {deleteTodo}
            updateTodo = {updateTodo}
          />
       )}
      </div>
    </>
  )
}

export default App
