import { styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: rgba(71, 100, 205, 0.85);
  opacity: 0.85;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  width: 393px;
  padding: 50px 0px;
`;

export const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 42px;
`;

export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: rgba(71, 100, 205, 0.5);
  opacity: 0.8;
  padding: 10px 20px;
  border-radius: 15px;
  border: none;
  width: 300px;
  height: 45px;
  font-size: 11pt;
  color: #ffffff;

  &::placeholder {
    color: white; /* Placeholder 텍스트의 색상을 회색으로 설정 */
    opacity: 0.8;
  }

  &[type="submit"] {
    height: 40px;
    background-color: #0066ff;
    color: white;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export const Switcher = styled.span`
  text-align: center;
  margin-top: 5px;
  a {
    color: white;
  }
`;
