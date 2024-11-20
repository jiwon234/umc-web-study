import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './todo-detail.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function TodoDetail() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태 관리
  const [title, setTitle] = useState(''); // 제목 상태
  const [content, setContent] = useState(''); // 내용 상태
  const [checked, setChecked] = useState(false); // 체크 상태를 상태로 관

  const { id } = useParams();  // URL에서 todo id를 받습니다.
  console.log(id);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (!isEditing) {
      const fetchTodo = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/todo/${id}`);
          setTodo(response.data); // 수정된 데이터를 다시 가져오기
        } catch (error) {
          console.error('오류:', error);
          alert('데이터를 다시 불러오는 데 실패했습니다.');
        }
      };
  
      fetchTodo();
    }
  }, [isEditing, id]); // isEditing이 false가 될 때 데이터를 새로 가져옴
  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setContent(todo.content);
      setChecked(todo.checked);
    }
  }, [todo]);  // todo가 변경될 때 상태 업데이트

  
  
  const editTodo = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:3000/todo/${id}`, {
        title,
        content,
      });

      setIsEditing(false); // 수정 완료 후 수정 모드 해제
      alert('수정이 완료되었습니다.');
      console.log(response);
    } catch (error) {
      console.error('오류:', error.response?.data || error);
      alert(error.response?.data?.message || '수정에 실패했습니다.');
    }
  };

  const deleteTodo = (id) => {
    const isDelete = confirm(`할 일 "${title}"을(를) 삭제하시겠습니까?`);
    if (isDelete) {
      try {
        // 회원가입 요청
        const response =  axios.delete(`http://localhost:3000/todo/${id}`);
        navigate('/');
      } catch (error) {
        // 에러 처리
        console.error('오류:', error.response?.data || error);
        alert(error.response?.data?.message || '실패했습니다.');
      }
    }
  };
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

  if (!todo) {
    return <div>Loading...</div>;  // 데이터 로딩 중 표시
  }

  return (
    <div style={{width: '300px'}}>
      <button onClick={() => {navigate(`/`)}} 
        style={{marginBottom: '10px', background:'none', border:'none', marginTop:'10px'}}><FaChevronLeft /></button>

      <p>id: {todo.id}</p>
      {isEditing ? (
            <div style={{display:'flex', flexDirection: 'column'}}>
              <p>
              제목: <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ fontWeight: 'bold' }} />
              </p>
              <p>
                내용: <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{ color: 'gray' }}
                />
              </p>
              <p>상태: <input
          type="checkbox"
          checked={checked}
          onClick={() => checkTodo(todo.id)}
        /></p>
            </div>
          ) : (
            <>
              <h3>제목: {todo.title}</h3>
              <p>내용: {todo.content}</p>
              <p>상태: {todo.checked ? '완료' : '미완료'}</p>
            </>
          )}
      <div style={{marginTop:'20px'}}>
      <p style={{textAlign: 'right', color: 'gray', fontSize:'small'}}>생성일: {todo.createdAt.substring(0, 10)}</p>
      <p style={{textAlign: 'right', color: 'gray', fontSize:'small'}}>최종 수정일: {todo.updatedAt.substring(0, 10)}</p>
      </div>
      
      
      <div style={{display: 'flex', flexDirection: 'row', gap: '4px', justifyContent:'right'}}>
        {isEditing ? (
          <button className='btn gray-btn detail-edit-btn' onClick={() => editTodo(todo.id)}>수정 완료</button>
        ) : (
          <button className='btn gray-btn detail-edit-btn' onClick={() => setIsEditing(true)}>수정</button>
        )}
        
        <button className='btn gray-btn detail-delete-btn' onClick={() => deleteTodo(todo.id)}>삭제</button>
      </div>
      
      
    </div>
  );
}

export default TodoDetail;
