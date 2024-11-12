import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;

  input {
    flex:1;
    padding: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    border: 1px solid rgb(220, 220, 220);
  }
  button {
    width: 90px;
    background-color: #FF0558;
    color: white;
    cursor: pointer;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  button:hover {
    background-color: #FF7471;
  }
`
const MovieGridContainer = styled.div `
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 30px;
`

export {SearchContainer, MovieGridContainer}