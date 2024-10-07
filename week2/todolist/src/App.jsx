import './App.css'
import { useState } from 'react';

function App() {
  // 투두 리스트, 화면에 출력 되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기'}, 
    { id: 2, task:'어쩌구저쩌구'}
  ]);
  
  const [text, setText] = useState('');
  
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  // 1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('입력하세요!')
    }
    setTodos((prev) =>[
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ])
    setText('');
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

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <button 
            onClick={() => addTodo()}
            type='submit'>할 일 등록</button>
      </form>
      <div>
        {todos.map((todo, _) =>
          <div style={{display: 'flex', gap: '20px'}}>
            {/* 수정이 아닐 때 */}
            {editingId !== todo.id && (
              <div key={todo.id} style={{display: 'flex', gap: '5px'}}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정 중 상태일 때 */}
            {editingId === todo.id && (
              <div key={todo.id} style={{display: 'flex', gap: '5px'}}>
                <p>{todo.id}.</p>
                <input defaultValue={todo.task} 
                  onChange={(e) => setEditText(e.target.value)}/>
              </div>
            )}
            <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
            {/* editingId !== todo.id  수정이 아닌 상태*/}
            {/* editingId === todo.id  수정 중인 상태*/}
            {editingId === todo.id ? (
              <button onClick={() => updateTodo(editingId, editText)}>수정 완료</button>
            ) : (
              <button onClick={() => setEditingId(todo.id)}>수정 진행</button>
            )}


          </div>
        )}
      </div>
    </>
  )
}

export default App
