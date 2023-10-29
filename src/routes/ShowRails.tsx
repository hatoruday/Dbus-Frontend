import styled from "styled-components";
import { Button, Logo, Text } from "../components/pointMenu";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TitkcTicketContainer } from "../components/TitleFundingContainer";
import { gql, useQuery } from "@apollo/client";

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
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const TitleFundingContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  margin: 5px 0px;
  gap: 20px;
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #4764cd;
`;

const SEARCH_FUNDS = gql`
  query searchFunds($locations: [Float]!, $isEnd: Boolean) {
    searchFunds(locations: $locations, isEnd: $isEnd) {
      id
      stations {
        name
        posX
        posY
      }
      fundAmount
      threshold
      users {
        id
      }
    }
  }
`;
export default function ShowRails() {
  const location = useLocation();

  const state = location.state;
  const {
    starting: { startingX, startingY, startingPoint },
    destination: { destinationX, destinationY, destinationPoint },
  } = location.state;
  const { data, loading } = useQuery(SEARCH_FUNDS, {
    variables: {
      locations: [
        parseFloat(startingX),
        parseFloat(startingY),
        parseFloat(destinationX),
        parseFloat(destinationY),
      ],
    },
  });
  const [result, setResult] = useState(data);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("data22", data);
    setResult(data);
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
  }, [data]);

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
            justifyContent: "space-between",
            padding: "0px 20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "15pt",
              display: "flex",
              justifyContent: "start",
              width: "100%",
              margin: "20px 0px",
              paddingTop: "30px",
            }}
          >
            현재 생성되어있는 주변 노선
          </div>
          {result?.searchFunds?.map((fund) => (
            <TitkcTicketContainer
              startingPoint={fund?.stations[0]?.name}
              destinationPoint={fund?.stations[1]?.name}
              totalAmount={fund?.threshold}
              currentAmount={fund?.fundAmount}
              totalNumber={16}
              currentNumber={fund?.users?.length}
              fundIdx={fund?.id}
            />
          ))}
        </div>
      </DownComponent>
      <BottomBar>
        <Text
          onClick={() => {
            navigate("/user/newline", {
              state: {
                starting: { startingX, startingY, startingPoint },
                destination: { destinationX, destinationY, destinationPoint },
              },
            });
          }}
        >
          신규 노선 개설하기
        </Text>
      </BottomBar>
    </FundingComponent>
  );
}
