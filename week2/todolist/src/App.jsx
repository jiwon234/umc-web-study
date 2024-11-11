import './App.css'
import { useState } from 'react';
import InputForm from './components/InputForm';
import Todo from './components/Todo';
import { TodoContext } from './context/TodoContext';
import { useContext } from 'react';

function App() {

  const {
    todos, 
    editingId,
    setEditingId, 
    editText, 
    setEditText,
    addTodo, 
    deleteTodo, 
    updateTodo,
  } = useContext(TodoContext);

  return (
    <>
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
    <h1>Todolist</h1>
    <InputForm addTodo={addTodo} />
      <div style={{marginTop: '20px'}}>
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
    </div>
    </>
  )
}

export default App
