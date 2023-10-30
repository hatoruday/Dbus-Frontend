import styled from "styled-components";
import { Button, Logo, Text } from "../components/pointMenu";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Achievment,
  NotAchievment,
  StrongText,
  TitkcTicketContainer,
} from "../components/TitleFundingContainer";

const FundingComponent = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr;
`;

const DownComponent = styled.div`
  background-color: rgba(71, 100, 205, 0.12);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleFundingContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  margin: 5px 0px;
  gap: 20px;
`;

const BottomBar = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #4764cd;
`;

const DetailContainer = styled.div`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  padding: 15px 0px;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  width: 100%;
`;
const AcheivementRateBar = styled.div`
  width: 90%;
  height: 30px;
  border-radius: 30px;
  background-color: #d9d9d9;
  display: flex;
  position: relative;
`;

export default function ShowFund({}) {
  const location = useLocation();
  const state = location.state;
  const {
    starting: { startingX, startingY, startingPoint },
    destination: { destinationX, destinationY, destinationPoint },
    fund: { fundIdx, totalAmount, currentAmount, totalNumber, currentNumber },
  } = location.state;
  var acheivementRate = (currentAmount / totalAmount) * 100;
  acheivementRate = acheivementRate > 100 ? 100 : acheivementRate;

  var numberRate = (currentNumber / totalNumber) * 100;
  numberRate = numberRate > 100 ? 100 : numberRate;
  const averageAmount = currentAmount / currentNumber;
  const totalAverageAmount = Math.floor(currentAmount / totalNumber);
  var averageAmountRate = (averageAmount / totalAverageAmount) * 100;
  averageAmountRate = averageAmount > 100 ? 100 : averageAmount;
  const navigate = useNavigate();

  useEffect(() => {
    const bounds = new window.kakao.maps.LatLngBounds();
    const startingPosition = new window.kakao.maps.LatLng(
      state.starting.startingY,
      state.starting.startingX
    );
    const destinationPosition = new window.kakao.maps.LatLng(
      state.destination.destinationY,
      state.destination.destinationX
    );
    bounds.extend(startingPosition);
    bounds.extend(destinationPosition);

    let container = document.getElementById("staticMap"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    map.setBounds(bounds);
  }, []);

  return (
    <FundingComponent>
      <div id="staticMap"></div>
      <DownComponent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "80%",
            justifyContent: "start",
            padding: "0px 20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              height: "70px",
              alignItems: "center",
            }}
          >
            <Button color="rgba(71, 100, 205, 0.5)">
              <Text color="white" fontSize="15px">
                {acheivementRate == 100 ? "종료" : "펀딩중"}
              </Text>
            </Button>
            <div
              style={{
                color: "black",
                fontSize: "12pt",
                display: "flex",
                justifyContent: "center",
                width: "80%",
                margin: "20px 0px",
                textAlign: "center",
              }}
            >
              {startingPoint} - {destinationPoint}
            </div>
          </div>
          <DetailContainer>
            <Text color="black" fontSize="12px">
              운행기간 11.1~11.31 월 화 수 목 금 운행
            </Text>
            <Text color="black" fontSize="12px">
              운행시간 07:00~
            </Text>

            <Text color="black" fontSize="12px">
              탑승장소 {startingPoint}
            </Text>
          </DetailContainer>

          <TitleFundingContainer>
            <Text color="black">
              {startingPoint} - {destinationPoint}
            </Text>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AcheivementRateBar id="acheivementbar">
                <Achievment rate={acheivementRate}>
                  <div
                    style={{
                      position: "absolute",
                      left: "20%",
                      width: "100px",
                      zIndex: "1",
                    }}
                  >
                    <StrongText>달성률 {acheivementRate} %</StrongText>
                  </div>
                </Achievment>
                <NotAchievment rate={acheivementRate}>
                  <div
                    style={{
                      position: "absolute",
                      right: "20%",
                      width: "100px",
                      zIndex: "1",
                    }}
                  >
                    <StrongText>
                      {totalAmount - currentAmount < 0
                        ? 0
                        : totalAmount - currentAmount}
                      KRW
                    </StrongText>
                  </div>
                </NotAchievment>
              </AcheivementRateBar>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <AcheivementRateBar id="acheivementbar">
                <Achievment rate={numberRate}>
                  <div
                    style={{
                      position: "absolute",
                      left: "20%",
                      width: "100px",
                      zIndex: "1",
                    }}
                  >
                    <StrongText>참여인원</StrongText>
                  </div>
                </Achievment>
                <NotAchievment rate={numberRate}>
                  <div
                    style={{
                      position: "absolute",
                      right: "20%",
                      width: "100px",
                      zIndex: "1",
                    }}
                  >
                    <StrongText>{currentNumber}명 펀딩 중</StrongText>
                  </div>
                </NotAchievment>
              </AcheivementRateBar>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <AcheivementRateBar id="acheivementbar">
                <Achievment rate={averageAmountRate}>
                  <div
                    style={{
                      position: "absolute",
                      left: "20%",
                      width: "100px",
                      zIndex: "1",
                    }}
                  >
                    <StrongText>1인당 평균 펀딩 금액</StrongText>
                  </div>
                </Achievment>
                <NotAchievment rate={averageAmountRate}>
                  <div
                    style={{
                      position: "absolute",
                      right: "20%",
                      width: "100px",
                      zIndex: "1",
                    }}
                  >
                    <StrongText>{totalAverageAmount} KRW</StrongText>
                  </div>
                </NotAchievment>
              </AcheivementRateBar>
            </div>
          </TitleFundingContainer>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#C8f8ff",
            width: "80%",
            height: "15%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              fontSize: "8pt",
              color: "black",
              width: "80%",
              display: "flex",
              margin: "7px 0px",
            }}
          >
            달성률 {100 - acheivementRate}% (
            {totalAmount - currentAmount < 0 ? 0 : totalAmount - currentAmount}
            KRW)를 채우면 노선이 개설됩니다.
          </div>
          <div
            style={{
              fontSize: "8pt",
              color: "black",
              width: "80%",
              display: "flex",
              margin: "7px 0px",
            }}
          >
            point로 탑승권을 구매하여 노선 개설에 참여해주세요!
          </div>
        </div>
      </DownComponent>
      <BottomBar>
        <Text
          onClick={() => {
            navigate("/user/donate", {
              state: {
                starting: { startingX, startingY, startingPoint },
                destination: {
                  destinationX,
                  destinationY,
                  destinationPoint,
                },
                fund: {
                  fundIdx,
                  totalAmount,
                  currentAmount,
                  totalNumber,
                  currentNumber,
                },
              },
            });
          }}
        >
          펀딩
        </Text>
      </BottomBar>
    </FundingComponent>
  );
}
