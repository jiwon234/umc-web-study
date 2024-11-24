import Todo from "../components/Todo.jsx";
import InputForm from "../components/InputForm.jsx";
import SyncLoader from 'react-spinners/SyncLoader';
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext.jsx";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import './todo-list.css';
import { getTodoList } from "../apis/todo.js";
import { useMutation } from "@tanstack/react-query";
function TodoList() {
  // const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  
  const [isError, setIsError] = useState(false);    

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  const {data:todos, isPending} = useQuery({
    queryFn: () => getTodoList({title: search}),
    queryKey: ["todos", search],
  });
  console.log(todos);
  console.log(title);
  console.log(search);
  /*
  useEffect(() => {
    const getTodos = async () => {
      try {
        const todos = await axios.get('http://localhost:3000/todo');
        console.log("출력", todos.data); // This logs the entire 'data' field, including both arrays

        // Assuming response.data[0] contains the array with your todo items
        const todoItems = todos.data[0];
        console.log('출력2',todoItems);
        setTodos(todoItems);
        setIsLoading(false);

      } catch (error) {
        console.error("Error", error);
        setIsError(true);     // 에러 발생 시
        setIsLoading(false);  // 로딩 완료
      }
    };
    getTodos();
  }, []);*/
  
  
 return (

   <>
     <InputForm/>
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
      ) : isPending ? (
        <>
          <SyncLoader color={'black'} style={{ marginTop: "40px" }}/>
          <p>게시글을 불러오는 중입니다...</p>
          <p>(isPending)</p>
        </>
      ) : (
      <ul className="" style={{ marginTop: "20px",}}>
        {todos[0]?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      )}
      
      <h2>Todo 검색</h2>
      <input value={search} onChange={(e => setSearch(e.target.value))}/>
   </>
 );
}
export default TodoList;