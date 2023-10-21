import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px; //아이콘과 글자간의 차이였음.
  align-items: center;
  justify-content: center;
  cursor: pointer; //버튼위에 마우스를 올렸을 때 마우스의 모양이 바뀜.
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider); //로그인이 성공하면
      navigate("/"); // home으로 navigate해준다.
    } catch (error) {
      console.error(error); //에러는 중간에 popup이 cancel됐을 때, 혹은 깃허브로 가입할려고 하는 계정이 이미
      //파이어베이스 상에 존재할 때
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.svg" />
      Continue with Github
    </Button>
  );
}
