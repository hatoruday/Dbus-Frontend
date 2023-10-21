import styled from "styled-components"

const Wrapper = styled.div`
  height: 100vh; //vh-> parent값에 의존하지 않고 view로 의존함.
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 24px;
`;

export default function LoadingScreen() {
  return <Wrapper><Text>Loading</Text></Wrapper>
}