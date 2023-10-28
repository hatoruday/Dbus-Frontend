import styled from "styled-components";
import { Button, Logo, Text } from "../components/pointMenu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
`;

const TitleFundingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 5px 0px;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #4764cd;
`;

export default function Funding() {
  const location = useLocation();
  const state = location.state;

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
            height: "70%",
            justifyContent: "space-around",
            padding: "0px 20px",
            alignItems: "center",
          }}
        >
          <TitleFundingContainer>
            <Button color="#4764cd" fontSize="18px" width="90px">
              펀딩중
            </Button>
          </TitleFundingContainer>
        </div>
      </DownComponent>
      <BottomBar>
        <Text>펀딩하기</Text>
      </BottomBar>
    </FundingComponent>
  );
}
