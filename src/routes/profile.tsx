import styled from "styled-components";
import { Top } from "../components/introduction-components";

// 배경 컨테이너 스타일
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* 원하는 높이 설정 */
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  overflow: hidden;
`;

const GradientContainer = styled.div`
  width: 100%;
  height: 20%; /* 원하는 높이 설정 */
  background: linear-gradient(to bottom, #6181f4, #ffffff);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

// 원 스타일
const Circle = styled.div`
  position: absolute;
  left: -75%;
  top: calc(30% - (40vh / 2));
  width: calc(100% + 150%);
  height: calc(100vh);
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    top: -50px; /* 아이콘이 원 테두리에서 약간 위로 올라가도록 설정 */
    left: 50%;
    transform: translateX(-50%);
    width: 100px; /* 아이콘의 너비 */
    height: 100px; /* 아이콘의 높이 */
    background-image: url("./userIcon.png");
    background-size: cover;
    border-radius: 50%; /* 원 모양으로 설정 */
  }
`;

const InsideContainer = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90%;
  background-color: orange;
  padding-left: 30px;
  padding-right: 30px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: 100%;
  color: black;
  height: 50%;
  justify-content: center;
`;

const BottomContainer = styled.div`
  display: flex;
  background-color: green;
  opacity: 0.5;
  width: 100%;
  color: black;
  justify-content: center;
  align-items: center;
  height: 50%;
`;
const NameTokenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: yellow;
  width: 100%;
`;

const NameRoleContainer = styled.div`
  color: white;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: purple;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  font-size: 20px;
`;
const RolContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
`;

const Funder = styled.div`
  font-size: 8pt;
  background-color: #04d9b2;
  color: black;
  border-radius: 30pt;
  padding: 5px 7px;
`;
const Passenger = styled.div`
  font-size: 8pt;
  color: black;
  background-color: #4764cd;
  border-radius: 30pt;
  padding: 5px 7px;
`;
const TokenContainer = styled.div`
  background-color: white;
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
`;

const RetainingTicketContainer = styled.div`
  background-color: black;
  display: flex;
  width: 100%;
  height: 100%;
`;

const IconContainer = styled.div`
  width: 20px;
  color: grey;
  font-weight: 500;
`;

const Token = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Title = styled.text`
  font-size: 10px;
`;

const SubTitle = styled.text`
  color: grey;
  font-size: 9px;
`;

const VerticalBar = styled.div`
  width: 2px;
  height: 20px;
  background-color: black;
`;
const UserProfilePage = () => {
  return (
    <BackgroundContainer>
      <GradientContainer></GradientContainer>
      <Circle />
      <InsideContainer>
        <TopContainer>
          <NameTokenContainer>
            <NameRoleContainer>
              <NameContainer>
                <Name>홍길동</Name>
                <IconContainer>
                  <svg
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </IconContainer>
              </NameContainer>

              <RolContainer>
                <Funder>투자자</Funder>
                <Passenger>탑승자</Passenger>
              </RolContainer>
            </NameRoleContainer>
            <TokenContainer>
              <Token>
                <Title>보유DBT</Title>
                <SubTitle>400Point</SubTitle>
              </Token>
              <VerticalBar />
              <Token>
                <Title>보유 티켓</Title>
                <SubTitle>65</SubTitle>
              </Token>
            </TokenContainer>
          </NameTokenContainer>
          <RetainingTicketContainer />
        </TopContainer>
        <BottomContainer>def</BottomContainer>
      </InsideContainer>
    </BackgroundContainer>
  );
};

export default UserProfilePage;
