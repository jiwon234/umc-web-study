import Todo from "../src/components/Todo";
import InputForm from "../src/components/InputForm";
import SyncLoader from 'react-spinners/SyncLoader';
import { MdCancel } from "react-icons/md";
import './todo-list.css';
function TodoList({todos, addTodo, isLoading, isError}) {
 return (
   <>
     <InputForm addTodo={addTodo} />
     {isLoading ? (
      <>
        <SyncLoader color={'black'} style={{ marginTop: "40px" }}/>
        <p>게시글을 불러오는 중입니다...</p> 
      </>
      ) : isError ? (
        <>
          <MdCancel className='error-icon' size="50" style={{ marginTop: "40px" }}/>
          <p>오류가 발생했습니다</p>
        </>
      ) : (
      <ul className="" style={{ marginTop: "20px" }}>
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      )}
   </>
 );
}
export default TodoList;