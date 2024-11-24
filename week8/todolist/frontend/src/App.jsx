import './App.css'
import { useState } from 'react';
import InputForm from './components/InputForm';
import Todo from './components/Todo';
import { TodoContext } from './context/TodoContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './pages/todo-list';
import TodoDetail from './pages/todo-detail';
import { useQuery } from '@tanstack/react-query';
function App() {
  
  return (
    <>
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
    <h1 style={{marginBottom: '10px'}}>Todolist</h1>
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />  {/* 목록 페이지 */}
        <Route path="/todo/:id" element={<TodoDetail />} />  {/* 상세 페이지 */}
      </Routes>
    </Router>

    </div>
    </>
  )
};

export default App;