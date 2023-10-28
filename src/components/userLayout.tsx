import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Logo } from "./pointMenu";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 393px;
  flex-direction: column;
`;

const TopNavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  padding: 20px 30px;
`;

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function UserLayout() {
  return (
    <Wrapper>
      <TopNavigationBar>
        <Logo src="/thick-chevron-left.svg" />
        <Logo src="/Home-Button.svg" width="22px" height="22px" />
      </TopNavigationBar>
      <Outlet />
    </Wrapper>
  );
}
