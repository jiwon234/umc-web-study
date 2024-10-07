function Todo({ 
  todo, 
  editingId, setEditingId, 
  editText, setEditText, 
  deleteTodo, 
  updateTodo 
}) {
  return (
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
  )
};
export default Todo;