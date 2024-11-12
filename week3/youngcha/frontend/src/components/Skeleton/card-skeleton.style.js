import styled, {keyframes} from "styled-components";
const skeleton = keyframes`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
const CardMain = styled.div`
  width: 170px;
  height: 240px;
  background: rgb(230, 230, 230);
  border-radius: 10px;
  overflow: hidden;
  animation: ${skeleton} 3s 1s infinite alternate;
`
const TextWrapper = styled.div`
  width: 170px;
  height: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 7px;
`
const TitleBox = styled.div`
  background: rgb(230, 230, 230);
  height: 16px;
  border-radius: 10px;
  animation: ${skeleton} 3s 1s infinite alternate;
`
const DescriptionBox = styled.div`
  background: rgb(230, 230, 230);
  height: 16px;
  border-radius: 10px;
  animation: ${skeleton} 3s 1s infinite alternate;
`
export {Container, CardMain, TextWrapper, TitleBox, DescriptionBox};