import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
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
