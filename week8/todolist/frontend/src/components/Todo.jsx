import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Todo({ todo,}) {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 관리
  const [title, setTitle] = useState(todo.title); // 제목 상태
  const [content, setContent] = useState(todo.content); // 내용 상태
  const [checked, setChecked] = useState(todo.checked); // 체크 상태를 상태로 관리
  const checkTodo = (id) => {
    try {
      // 회원가입 요청
      const response =  axios.patch(`http://localhost:3000/todo/${id}`, {
        "checked": !checked,
      });
      setChecked(!checked); // 상태 업데이트하여 UI에 반영
      console.log(response); // 서버 응답 확인
      // 응답 처리

    } catch (error) {
      // 에러 처리
      console.error('오류:', error.response?.data || error);
      alert(error.response?.data?.message || '실패했습니다.');
    }
  };
  const editTodo = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:3000/todo/${id}`, {
        title,
        content,
      });

      setIsEditing(false); // 수정 완료 후 수정 모드 해제
      alert('수정되었습니다.');
      console.log(response);
    } catch (error) {
      console.error('오류:', error.response?.data || error);
      alert(error.response?.data?.message || '수정에 실패했습니다.');
    }
  };
  const deleteTodo = (id) => {
    try {
      // 회원가입 요청
      const response =  axios.delete(`http://localhost:3000/todo/${id}`);
      window.location.reload();
      // 응답 처리

    } catch (error) {
      // 에러 처리
      console.error('오류:', error.response?.data || error);
      alert(error.response?.data?.message || '실패했습니다.');
    }
  };
  const goDetailPage = (id) => {
    navigate(`/todo/${id}`)
  };
  return (
    <div style={{ display: 'flex', alignItems:'center' }} className="todo" >
    <div key={todo.id} >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input
          type="checkbox"
          checked={checked}
          onClick={() => checkTodo(todo.id)}
          
        />
        <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
          {isEditing ? (
            <>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ fontWeight: 'bold' }}
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ color: 'gray' }}
              />
            </>
          ) : (
            <div>
              <p style={{ fontWeight: 'bold' }} className='hover' onClick={() => {goDetailPage(todo.id)}}>{title}</p>
              <p style={{ color: 'gray' }}>{content}</p>
            </div>
          )}
        </div>
      </div>
    </div>

    {isEditing ? (
      <button
        onClick={() => editTodo(todo.id)}
        className="edit-btn"
      >
        수정 완료
      </button>
    ) : (
      <button
        onClick={() => setIsEditing(true)}
        className="edit-btn"
      >
        수정 진행
      </button>
    )}

    <button
      onClick={() => deleteTodo(todo.id)}
      className="delete-btn"
    >
      X
    </button>
  </div>
  )
};
export default Todo;