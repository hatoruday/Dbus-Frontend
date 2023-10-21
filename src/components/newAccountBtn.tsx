import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  margin-top: 50px;
  font-weight: 500;
  width: 100%;
  color: white;
  padding: 10px 20px;
  border-radius: 50px;
  border: solid 2px white;
  display: flex;
  gap: 5px; //아이콘과 글자간의 차이였음.
  align-items: center;
  justify-content: center;
  cursor: pointer; //버튼위에 마우스를 올렸을 때 마우스의 모양이 바뀜.
`;

export default function NewAccountButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      navigate("/create-account"); // home으로 navigate해준다.
    } catch (error) {
      console.error(error); //에러는 중간에 popup이 cancel됐을 때, 혹은 깃허브로 가입할려고 하는 계정이 이미
      //파이어베이스 상에 존재할 때
    }
  };
  return <Button onClick={onClick}>새계정 만들기</Button>;
}
