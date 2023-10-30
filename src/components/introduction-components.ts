import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 5.5fr 4.5fr;
  width: 393px;
`;

export const Top = styled.div`
  background-color: white;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  flex-direction: column;
  padding-right: 10%;
`;

export const DBUSImage = styled.img`
  justify-content: end;
  max-width: 70%;
  max-height: 50%;
  align-items: flex-end;
`;

export const Content = styled.div`
  padding-left: 10%;
  width: 100%;
  align-items: flex-start;
  font-weight: bold;
  text-align: start;

  color: black;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
`;

export const Down = styled.div`
  background-color: #4764cd;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DownIntroduction = styled.div`
  margin-left: 20%;
  margin-top: 100px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 70px;
  width: 70px;
  font-size: 15px;
  border-radius: 50%;
`;

export const OtherIcon = styled.button`
  cursor: pointer;
  background-color: #4064cd;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: none;
  height: 50px;
  width: 50px;
  font-size: 15px;
  border-radius: 50%;
`;

export const NewTop = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IntroductionImage = styled.img`
  justify-content: end;

  max-width: 100%;
  max-height: 100%;
  align-items: center;
`;

export const IntroductionTitle = styled.h1`
  font-size: 25px;
  color: black;
  display: flex;
  align-items: center;
`;

export const IntroductionSubTitle = styled.h3`
  font-size: 20px;
  color: black;
`;
export const NewDown = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
`;
interface DotProps {
  active: boolean;
}
export const IntroductionBar = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10%;
  align-items: center;
`;

export const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #4764cd;

  ${({ active }) =>
    active &&
    css`
      width: 20px;
      height: 20px;
      background-color: #4764cd;
    `}
`;
