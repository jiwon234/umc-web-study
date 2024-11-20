import Todo from "../src/components/Todo";
import InputForm from "../src/components/InputForm";
function TodoList({todos, addTodo}) {
 return (
   <>
     <InputForm addTodo={addTodo} />
      <ul className='todo-list' style={{marginTop: '20px'}}>
        {todos?.map((todo, _) =>
          <Todo 
            key = {todo.id}
            todo = {todo}
            
          />          
       )}
      </ul>

   </>
 
 )
}
export default TodoList;