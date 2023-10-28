import styled from "styled-components";
import { Logo, Text } from "../components/pointMenu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const NewRailComponent = styled.div`
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

const InputContainer = styled.div`
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3px;
  padding: 10px 15px;
  height: 35px;
  border-radius: 10px;
  border: 1px solid #cdcdcd;
`;

const TimeInput = styled.input`
  width: 100%;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  border: none;
  &:focus {
    outline: none; // Change this to the desired border color: ;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  margin: 5px 0px;
`;

const QContainer = styled.div`
  width: 100%;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #4764cd;
`;

const CREATE_FUND = gql`
  mutation createFund($stations: [String]!, $locations: [Float]!) {
    createFund(stations: $stations, locations: $locations) {
      ok
      error
    }
  }
`;

export default function NewLine() {
  const onCompleted = (data) => {
    const {
      createFund: { ok, error },
    } = data;
    console.log(ok);
  };
  const [createFund, { loading }] = useMutation(CREATE_FUND, { onCompleted });
  const location = useLocation();
  const [time, setTime] = useState("");
  const state = location.state;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name == "value") {
      setTime(value);
    }
  };

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
  const onSubmit = () => {
    createFund({
      variables: {
        stations: [
          state.starting.startingPoint,
          state.destination.destinationPoint,
        ],
        locations: [
          parseFloat(state.starting.startingX),
          parseFloat(state.starting.startingY),
          parseFloat(state.destination.destinationX),
          parseFloat(state.destination.destinationY),
        ],
      },
    });
  };
  return (
    <NewRailComponent>
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
          <QContainer>
            <TitleContainer>
              <Text color="black">어디서 출발하나요?</Text>
            </TitleContainer>
            <InputContainer>
              <Text color="black">{state.starting.startingPoint}</Text>
              <Logo src="/search.svg" width="20px" height="20px" />
            </InputContainer>
            <TitleContainer>
              <Text color="#4764cd" fontSize="10pt">
                예) 주안역, 강남역
              </Text>
            </TitleContainer>
          </QContainer>

          <QContainer>
            <TitleContainer>
              <Text color="black">어디로 가시나요?</Text>
            </TitleContainer>

            <InputContainer>
              <Text color="black">{state.destination.destinationPoint}</Text>
              <Logo src="/search.svg" width="20px" height="20px" />
            </InputContainer>
            <TitleContainer>
              <Text color="#4764cd" fontSize="10pt">
                예) 판교역, 개포동123-4
              </Text>
            </TitleContainer>
          </QContainer>

          <QContainer>
            <TitleContainer>
              <Text color="black">언제 출발해야하나요?</Text>
            </TitleContainer>

            <InputContainer>
              <TimeInput
                onChange={onChange}
                name="value"
                value={time}
                placeholder="출발시간"
                required
              />
              <Logo src="/search.svg" width="20px" height="20px" />
            </InputContainer>
            <TitleContainer>
              <Text color="#4764cd" fontSize="10pt">
                예) 10:20, 17:30
              </Text>
            </TitleContainer>
          </QContainer>
        </div>
      </DownComponent>
      {loading ? (
        <BottomBar>
          <Text>..Loading</Text>
        </BottomBar>
      ) : (
        <BottomBar
          onClick={() => {
            onSubmit();
          }}
        >
          <Text>신규 노선 개설하기</Text>
        </BottomBar>
      )}
    </NewRailComponent>
  );
}
