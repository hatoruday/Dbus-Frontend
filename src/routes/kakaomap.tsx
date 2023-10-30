import { useEffect, useState } from "react";
import styled from "styled-components";
import { Logo } from "../components/pointMenu";
import Map from "../components/Map";

declare global {
  interface Window {
    kakao: any;
  }
}

export const Form = styled.form``;

export const InputContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  background-color: white;
  border: none;
  width: 80%;
  font-size: 11pt;
  color: black;
  &:focus {
    outline: none; // Change this to the desired border color: ;
  }
`;

export const InvisibleButton = styled.button`
  display: none;
`;
export const BackButton = styled.button`
  display: flex;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const KakaoMap = () => {
  // 입력 폼 변화 감지하여 입력 값 관리
  const [value, setValue] = useState("");
  // 제출한 검색어 관리
  const [keyword, setKeyword] = useState("");

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "amount") {
      setValue(value);
    }
  };

  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setKeyword(value);
  };

  useEffect(() => {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return <Map searchKeyword={keyword} />;
};

//<div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
export default KakaoMap;
