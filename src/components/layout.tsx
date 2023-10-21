import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(71, 100, 205, 0.85);
  opacity: 0.85;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 393px;
  padding: 0px 0px;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}
