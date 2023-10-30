import styled from "styled-components";
import { Logo } from "./pointMenu";

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(71, 100, 205, 0.5);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
  color: white;
`;
export default function LoadingScreen() {
  return (
    <Background>
      <Logo src="/thick_bus.png" width="200px" height="160px" />
      <LoadingText>블록체인 네트워크와 통신중..</LoadingText>
      <LoadingText>대략 30초 정도 소요됩니다..</LoadingText>
    </Background>
  );
}
