import styled from "styled-components";
import { ProfileBottomContainer } from "../components/profileBottomContainer";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/loading-screen";

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
  display: flex;
  flex-direction: column;
  justify-content: space-;
  align-items: center;
  width: 100%;
  height: 90%;
  padding-left: 30px;
  padding-right: 30px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  color: black;
  justify-content: start;
`;

const NameTokenContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
`;

const NameRoleContainer = styled.div`
  color: black;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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
  font-size: 30px;
`;
const RolContainer = styled.div`
  padding: 15px 0px;
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
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
`;

const RetainingTicketContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const TicketTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
`;

const IconContainer = styled.div`
  width: 20px;
  color: grey;
  font-weight: 500;
`;

const Token = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 30%;
`;

const Title = styled.text`
  font-size: 10px;
`;

const SubTitle = styled.text`
  display: flex;
  justify-content: start;
  width: 100%;
  color: grey;
  font-size: 9px;
`;
const VerticalBar = styled.div`
  width: 2px;
  height: 20px;
  background-color: black;
`;

const TicketContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: space-around;
`;

const TicketContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const SEE_PROFILE = gql`
  query seeProfile {
    seeProfile {
      username
      tokenAmount
      id
      tickets {
        amount
        fund {
          id
          stations {
            name
          }
        }
      }
    }
  }
`;

const UserProfilePage = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery(SEE_PROFILE, {
    fetchPolicy: "network-only",
  });
  const [result, setResult] = useState(data);

  useEffect(() => {
    setResult(data);
  }, [data, loading]);
  return loading ? (
    <LoadingScreen />
  ) : (
    <BackgroundContainer>
      <GradientContainer></GradientContainer>
      <Circle />
      <InsideContainer>
        <TopContainer>
          <NameTokenContainer>
            <NameRoleContainer>
              <NameContainer>
                <Name>{result?.seeProfile?.username}</Name>
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
                <Title>보유 Point</Title>
                <SubTitle>{result?.seeProfile?.tokenAmount}</SubTitle>
              </Token>
              <VerticalBar />
              <Token>
                <Title>보유 티켓</Title>
                <SubTitle>65</SubTitle>
              </Token>
            </TokenContainer>
          </NameTokenContainer>
          <RetainingTicketContainer>
            <TicketTitle style={{}}>
              <div>
                <span style={{ fontSize: "20px" }}>보유 티켓</span>
                <span style={{ fontSize: "10px", paddingLeft: "10px" }}>
                  (출발 / 도착)
                </span>
              </div>
              <span
                style={{ fontSize: "7px", cursor: "pointer" }}
                onClick={() => navigate("/user/detail")}
              >
                모든 티켓 확인하기{" >"}
              </span>
            </TicketTitle>
            <TicketContentContainer>
              <TicketContent
                onClick={() => {
                  if (result?.seeProfile?.tickets[0]?.amount > 0) {
                    navigate("/user/consume", {
                      state: {
                        userId: result?.seeProfile?.id,
                        fundId: result?.seeProfile?.tickets[0]?.fund?.id,
                        railName: [
                          result?.seeProfile?.tickets[0]?.fund.stations[0]
                            ?.name,
                          result?.seeProfile?.tickets[0]?.fund?.stations[1]
                            ?.name,
                        ],
                        ticketAmount: result?.seeProfile?.tickets[0]?.amount,
                      },
                    });
                  }
                }}
              >
                <span style={{ fontSize: "25px" }}>
                  {result?.seeProfile?.tickets[0]?.amount
                    ? result?.seeProfile?.tickets[0]?.amount
                    : "-"}
                </span>
                <span style={{ fontSize: "10px" }}>
                  <span style={{ fontSize: "10px" }}>
                    {result?.seeProfile?.tickets[0]?.fund?.stations[0]?.name
                      ? result?.seeProfile?.tickets[0]?.fund?.stations[0]?.name.split(
                          " "
                        )[0]
                      : ""}
                    /
                    {result?.seeProfile?.tickets[0]?.fund?.stations[1]?.name
                      ? result?.seeProfile?.tickets[0]?.fund?.stations[1]?.name.split(
                          " "
                        )[0]
                      : ""}
                  </span>
                </span>
              </TicketContent>
              <TicketContent
                onClick={() => {
                  if (result?.seeProfile?.tickets[1]?.amount > 0) {
                    navigate("/user/consume", {
                      state: {
                        userId: result?.seeProfile?.id,
                        fundId: result?.seeProfile?.tickets[1]?.fund?.id,
                        railName: [
                          result?.seeProfile?.tickets[1]?.fund?.stations[0]
                            ?.name,
                          result?.seeProfile?.tickets[1]?.fund?.stations[1]
                            ?.name,
                        ],
                        ticketAmount: result?.seeProfile?.tickets[1]?.amount,
                      },
                    });
                  }
                }}
              >
                <span style={{ fontSize: "25px" }}>
                  {result?.seeProfile?.tickets[1]?.amount
                    ? result?.seeProfile?.tickets[1]?.amount
                    : "-"}
                </span>
                <span style={{ fontSize: "10px" }}>
                  {result?.seeProfile?.tickets[1]?.fund?.stations[0]?.name
                    ? result?.seeProfile?.tickets[1]?.fund?.stations[0]?.name.split(
                        " "
                      )[0]
                    : ""}
                  /
                  {result?.seeProfile?.tickets[1]?.fund?.stations[1]?.name
                    ? result?.seeProfile?.tickets[1]?.fund?.stations[1]?.name.split(
                        " "
                      )[0]
                    : ""}
                </span>
              </TicketContent>
              <TicketContent
                onClick={() => {
                  if (result?.seeProfile?.tickets[2]?.amount > 0) {
                    navigate("/user/consume", {
                      state: {
                        userId: result?.seeProfile?.id,
                        fundId: result?.seeProfile?.tickets[2]?.fund?.id,
                        railName: [
                          result?.seeProfile?.tickets[2]?.fund?.stations[0]
                            ?.name,
                          result?.seeProfile?.tickets[2]?.fund?.stations[1]
                            ?.name,
                        ],
                        ticketAmount: result?.seeProfile?.tickets[2]?.amount,
                      },
                    });
                  }
                }}
              >
                <span style={{ fontSize: "25px" }}>
                  {" "}
                  {result?.seeProfile?.tickets[2]?.amount
                    ? result?.seeProfile?.tickets[2]?.amount.split(" ")[0]
                    : "-"}
                </span>
                <span style={{ fontSize: "10px" }}>
                  {result?.seeProfile?.tickets[2]?.fund?.stations[0]?.name
                    ? result?.seeProfile?.tickets[2]?.fund?.stations[0]?.name.split(
                        " "
                      )[0]
                    : ""}
                  /
                  {result?.seeProfile?.tickets[2]?.fund?.stations[1]?.name
                    ? result?.seeProfile?.tickets[2]?.fund?.stations[1]?.name
                    : ""}
                </span>
              </TicketContent>
            </TicketContentContainer>
          </RetainingTicketContainer>
        </TopContainer>
        <ProfileBottomContainer />
      </InsideContainer>
    </BackgroundContainer>
  );
};

export default UserProfilePage;
