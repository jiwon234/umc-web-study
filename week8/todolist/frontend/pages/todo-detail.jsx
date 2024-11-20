import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TodoDetail() {
  const { id } = useParams();  // URL에서 todo id를 받습니다.
  console.log(id);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/todo/${id}`);
        setTodo(response.data);  // 데이터를 상태에 저장
      } catch (error) {
        console.error('오류:', error);
        alert('상세 정보를 불러오는 데 실패했습니다.');
      }
    };

    fetchTodo();
  }, [id]);  // id가 변경될 때마다 데이터를 새로 가져옵니다.

  if (!todo) {
    return <div>Loading...</div>;  // 데이터 로딩 중 표시
  }

  return (
    <div>
      <p>id: {todo.id}</p>
      <p>제목: {todo.title}</p>
      <p>내용: {todo.content}</p>
      <p>생성일시: {todo.createdAt}</p>
      <p>최종 수정일시: {todo.updatedAt}</p>
      <p>상태: {todo.checked ? '완료' : '미완료'}</p>
    </div>
  );
}

export default TodoDetail;
