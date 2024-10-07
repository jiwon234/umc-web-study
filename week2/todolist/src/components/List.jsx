import Todo from "./Todo";

const TodoList = ({ 
  todo, todos, 
  editingId, setEditingId, 
  editText, setEditText, 
  deleteTodo, 
  updateTodo 
}) => {
  return (
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
  )
}

export default TodoList