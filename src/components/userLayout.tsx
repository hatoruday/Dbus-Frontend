import { Outlet, useNavigate } from "react-router-dom";
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
  padding: 16px 30px;
`;

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

export default function UserLayout() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TopNavigationBar>
        <Logo src="/thick-chevron-left.svg" onClick={() => navigate(-1)} />
        <Logo
          src="/Home-Button.svg"
          width="22px"
          height="22px"
          onClick={() => navigate("/user")}
        />
      </TopNavigationBar>
      <Outlet />
    </Wrapper>
  );
}
