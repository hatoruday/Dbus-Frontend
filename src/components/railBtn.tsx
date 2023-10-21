import { styled } from "styled-components";
import { useState } from "react";

const Button = styled.span`
  margin-top: 50px;
  font-weight: 500;
  width: 70%;
  height: 12%;
  background-color: #04d9b2;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  gap: 5px; //아이콘과 글자간의 차이였음.
  align-items: center;
  justify-content: center;
  cursor: pointer; //버튼위에 마우스를 올렸을 때 마우스의 모양이 바뀜.
`;

const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
  }
`;

const Input = styled.input`
  background-color: rgba(153, 234, 220, 0.5);
  padding: 10px 20px;
  border-radius: 7px;
  border: none;

  width: 300px;
  height: 30px;
  font-size: 12pt;
  color: #ffffff;

  &::placeholder {
    color: grey; /* Placeholder 텍스트의 색상을 회색으로 설정 */
    opacity: 0.8;
  }
`;

export default function RailButton() {
  const [rail, setRail] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setRail(value);
  };

  return (
    <Button>
      <MenuItem>
        <svg
          color="black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </MenuItem>
      <Input
        onChange={onChange}
        name="rail"
        value={rail}
        placeholder="노선검색"
        type="text"
        required
      />
    </Button>
  );
}
