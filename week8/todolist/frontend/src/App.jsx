import './App.css'
import { useState } from 'react';
import InputForm from './components/InputForm';
import Todo from './components/Todo';
import { TodoContext } from './context/TodoContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from '../pages/todo-list';
import TodoDetail from '../pages/todo-detail';
function App() {

  const {
    editingId,
    setEditingId, 
    editText, 
    setEditText,
    addTodo, 
    deleteTodo, 
    updateTodo,
  } = useContext(TodoContext);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const todos = await axios.get('http://localhost:3000/todo');
      console.log("출력", todos.data); // This logs the entire 'data' field, including both arrays

      // Assuming response.data[0] contains the array with your todo items
      const todoItems = todos.data[0];
      console.log('출력2',todoItems);
      setTodos(todoItems);
    }
    getTodos();
}, []);
  
console.log(todos);
  
  return (
    <>
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
    <h1>Todolist</h1>
    <Router>
      <Routes>
        <Route path="/" element={<TodoList todos={todos} addTodo={{addTodo}}/>} />  {/* 목록 페이지 */}
        <Route path="/todo/:id" element={<TodoDetail />} />  {/* 상세 페이지 */}
      </Routes>
    </Router>

    </div>
    </>
  )
}

export default App
