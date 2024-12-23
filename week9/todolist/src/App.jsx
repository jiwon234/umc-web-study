import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import InputTodo from './components/InputTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display:'flex', flexDirection: 'column'}}>
    <InputTodo /> 
    <TodoList/>
    </div>
      
    </>
  )
}

export default App
