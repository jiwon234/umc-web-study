import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { remove , complete } from '../redux/todoSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';


export default function TodoList() {
    const todolist = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const trash = <FontAwesomeIcon icon={faTrashCan} />


    console.log(todolist)

    const todolistView = todolist.map((todo, idx) => (
        
    <Li key={todolist[idx].id} >
        <input  type="checkbox" style={{margin: '0px' ,marginRight: '20px'}}
        onChange={()=> dispatch(complete(todolist[idx].id))}/>
        <div style={{width: '140px', textAlign: 'left'}}>{todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}</div>
        <DeleteBtn type="button" onClick={() => dispatch(remove(todolist[idx].id))}>{trash}</DeleteBtn>
    </Li> 
    )
    )


  return (
      <>
     <ul style={{paddingLeft: '4px'}}>{todolistView}</ul>   
      </>
  )


}

const Li = styled.li `
    listStyle: none;
    display: flex;
    flexDirection: row;
    height: 40px;
    align-items: center;
    
    
`
const DeleteBtn = styled.button `
    padding:10px;
    display: flex;
    justify-content: center;  /* 가로 중앙 정렬 */
    align-items: center;      /* 세로 중앙 정렬 */
    background: none;
`