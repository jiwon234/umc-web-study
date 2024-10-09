function Todo({ 
  todo, 
  editingId, setEditingId, 
  editText, setEditText, 
  deleteTodo, 
  updateTodo 
}) {
  return (
    <div style={{display: 'flex'}} className="todo">
      {/* 수정이 아닐 때 */}
      {editingId !== todo.id && (
        <div key={todo.id} >
          <p>{todo.id}.</p>
          <p>{todo.task}</p>
        </div>
      )}
      {/* 수정 중 상태일 때 */}
      {editingId === todo.id && (
        <div key={todo.id}>
          <p>{todo.id}.</p>
          <input defaultValue={todo.task} 
            onChange={(e) => {
              setEditText(e.target.value);
              console.log(editText);
              }}/>
        </div>
      )}
      
      {/* editingId !== todo.id  수정이 아닌 상태*/}
      {/* editingId === todo.id  수정 중인 상태*/}
      {editingId === todo.id ? (
        <button 
          onClick={() => {
            console.log(editText);
            updateTodo(editingId, editText);
          }} 
          className='edit-btn'
          >수정 완료</button>
      ) : (
        <button 
          onClick={() => {
            setEditingId(todo.id);
            setEditText(todo.task);
          }}
          className="edit-btn"
        >수정 진행</button>
      )}
      <button 
        onClick={() => deleteTodo(todo.id)}
        className="delete-btn">X</button>
    </div>
  )
};
export default Todo;