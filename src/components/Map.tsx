import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  BackButton,
  Form,
  Input,
  InputContainer,
  InvisibleButton,
} from "../routes/kakaomap";
import { Button, Logo, Text } from "./pointMenu";
import { SearchResultComponent } from "./SearchResultComponent";
import { useNavigate } from "react-router-dom";

interface InputCircle {
  backgroundColor: string;
}

const InputCircle = styled.div<InputCircle>`
  background-color: ${(props) => props.backgroundColor};
  width: 13px;
  height: 13px;
  display: flex;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
`;

interface placeType {
  place_name: string;
  road_address_name: string;
  address_name: string;
  phone: string;
  place_url: string;
}
interface propsType {
  searchKeyword: string;
}
const MapContainer = styled.div``;
const SearchContainer = styled.div`
  padding: 20px 20px;
  width: 393px;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// head에 작성한 Kakao API 불러오기
const { kakao } = window as any;

const Map = (props: propsType) => {
  // 마커를 담는 배열
  let markers: any[] = [];
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  // 제출한 검색어 관리
  const [keyword, setKeyword] = useState("");
  // 검색어가 바뀔 때마다 재렌더링되도록 useEffect 사용

  const [startingPoint, setStartingPoint] = useState("");
  const [startingX, setStartingX] = useState(126.9786567);
  const [startingY, setStartingY] = useState(37.566826);
  const [destinationX, setDestinationX] = useState(startingX);
  const [destinationY, setDestinationY] = useState(startingY);
  const [destinationPoint, setDestinationPoint] = useState("");
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    var mapOption;
    if (destinationPoint !== "") {
      mapOption = {
        center: new kakao.maps.LatLng(destinationY, destinationX), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
    } else {
      mapOption = {
        center: new kakao.maps.LatLng(startingY, startingX), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
    }

    function MarkerInfo(marker: any, title: string) {
      kakao.maps.event.addListener(marker, "mouseover", function () {
        displayInfowindow(marker, title);
      });

      kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close();
      });
    }
    // 지도를 생성
    const map = new kakao.maps.Map(mapContainer, mapOption);
    var startingMarker: any;
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 4 });

    if (startingPoint !== "") {
      const sdmarkers = setMarker();
      if (destinationPoint !== "") {
        MarkerInfo(sdmarkers[0], startingPoint);
        MarkerInfo(sdmarkers[1], destinationPoint);
        const bounds = new kakao.maps.LatLngBounds();
        if (startingPoint !== "" && destinationPoint !== "") {
          const startingPosition = new kakao.maps.LatLng(startingY, startingX);
          const destinationPosition = new kakao.maps.LatLng(
            destinationY,
            destinationX
          );
          bounds.extend(startingPosition);
          bounds.extend(destinationPosition);
          map.setBounds(bounds);
        }
      } else MarkerInfo(sdmarkers[0], startingPoint);
    }

    // 장소 검색 객체를 생성
    const ps = new kakao.maps.services.Places();

    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성

    // 키워드로 장소를 검색합니다
    searchPlaces(keyword);

    // 키워드 검색을 요청하는 함수
    function searchPlaces(keyword: string) {
      if (!keyword.replace(/^\s+|\s+$/g, "")) {
        console.log("키워드를 입력해주세요!");
        return false;
      }

      // 장소검색 객체를 통해 키워드로 장소검색을 요청
      ps.keywordSearch(keyword, placesSearchCB);
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출
        displayPlaces(data);

        // 페이지 번호를 표출
        displayPagination(pagination);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    }

    function setMarker() {
      const imageSize = new kakao.maps.Size(70, 70); // 마커 이미지의 크기
      const ArrivalImageSrc = "/Arrival.svg"; // 마커 이미지 url, 스프라이트 이미지
      const DepartureImageSrc = "/Departure.svg";
      const ArrivalMarkerImage = new kakao.maps.MarkerImage(
        ArrivalImageSrc,
        imageSize
      );
      const DepartureMarkerImage = new kakao.maps.MarkerImage(
        DepartureImageSrc,
        imageSize
      );

      if (startingPoint !== "") {
        const position = new kakao.maps.LatLng(startingY, startingX);

        const smarker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: DepartureMarkerImage,
        });

        smarker.setMap(map); // 지도 위에 마커를 표출
        // 배열에 생성된 마커를 추가

        markers.push(smarker);
        if (destinationPoint !== "") {
          const position = new kakao.maps.LatLng(destinationY, destinationX);

          const dmarker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: ArrivalMarkerImage,
          });

          dmarker.setMap(map); // 지도 위에 마커를 표출
          markers.push(dmarker); // 배열에 생성된 마커를 추가
        }
      }

      return markers;
    }

    // 검색 결과 목록과 마커를 표출하는 함수
    function displayPlaces(places: string | any[]) {
      const listEl = document.getElementById("places-list"),
        resultEl = document.getElementById("search-result"),
        fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds();

      // 검색 결과 목록에 추가된 항목들을 제거 - 기존에 있던 것을 삭제한다.
      listEl && removeAllChildNods(listEl);

      // 지도에 표시되고 있는 마커를 제거. 기존 것을 삭제한다.
      if (startingPoint == "") {
        removeMarker();
      }

      for (let i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시
        const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
        var marker;
        if (keyword !== "") {
          marker = addMarker(placePosition, i, undefined);
        }

        const itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시
        // mouseout 했을 때는 인포윈도우를 닫기

        function addInformation(marker: any, title: string) {
          kakao.maps.event.addListener(marker, "mouseover", function () {
            displayInfowindow(marker, title);
          });

          kakao.maps.event.addListener(marker, "mouseout", function () {
            infowindow.close();
          });

          itemEl.onmouseover = function () {
            displayInfowindow(marker, title);
          };

          itemEl.onmouseout = function () {
            infowindow.close();
          };
        }
        if (startingPoint == "") {
          addInformation(marker, places[i].place_name);
        }

        itemEl.onclick = function () {
          if (startingPoint !== "") {
            setDestinationPoint(places[i].place_name);
            setDestinationX(places[i].x);
            setDestinationY(places[i].y);
            setValue(destinationPoint);
          } else {
            setStartingPoint(places[i].place_name);
            setStartingX(places[i].x);
            setStartingY(places[i].y);
          }
          setValue("");
          setKeyword("");
        };
        fragment.appendChild(itemEl);
      }

      // 검색결과 항목들을 검색결과 목록 Element에 추가
      listEl && listEl.appendChild(fragment);
      if (resultEl) {
        resultEl.scrollTop = 0;
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정
      map.setBounds(bounds);
    }

    // 검색결과 항목을 Element로 반환하는 함수
    function getListItem(index: number, places: placeType) {
      const el = document.createElement("li");
      const itemStr = `
          <div class="info">
            <span class="marker marker_${index + 1}">
              ${index + 1}
            </span>
            <a>
              <h5 class="info-item place-name">${places.place_name}</h5>
              ${
                places.road_address_name
                  ? `<span class="info-item road-address-name">
                    ${places.road_address_name}
                   </span>
                   <span class="info-item address-name">
                 	 ${places.address_name}
               	   </span>`
                  : `<span class="info-item address-name">
             	     ${places.address_name}
                  </span>`
              }
              <span class="info-item tel">
                ${places.phone}
              </span>
            </a>
          </div>
          `;

      el.innerHTML = itemStr;
      el.className = "item";

      return el;
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수
    function addMarker(position: any, idx: number, title: undefined) {
      const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지
        imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions
        ),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출
      markers.push(marker); // 배열에 생성된 마커를 추가

      return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }

    // 검색결과 목록 하단에 페이지번호를 표시는 함수
    function displayPagination(pagination: {
      last: number;
      current: number;
      gotoPage: (arg0: number) => void;
    }) {
      const paginationEl = document.getElementById("pagination") as HTMLElement;
      const fragment = document.createDocumentFragment();
      let i;

      // 기존에 추가된 페이지번호를 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.lastChild &&
          paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        const el = document.createElement("a") as HTMLAnchorElement;
        el.href = "#";
        el.innerHTML = i.toString();

        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수
    // 인포윈도우에 장소명을 표시
    function displayInfowindow(marker: any, title: string) {
      const content =
        '<div style="padding:5px;z-index:6;color:red;" class="marker-title">' +
        title +
        "</div>";

      infowindow.setContent(content);
      infowindow.open(map, marker);
    }

    // 검색결과 목록의 자식 Element를 제거하는 함수
    function removeAllChildNods(el: HTMLElement) {
      while (el.hasChildNodes()) {
        el.lastChild && el.removeChild(el.lastChild);
      }
    }
  }, [keyword]);

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name == "value") {
      setValue(value);
    }
  };

  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submitKeyword");
    setKeyword(value);
  };

  return (
    <MapContainer>
      <Form onSubmit={submitKeyword}>
        <SearchContainer>
          <BackButton>
            <Logo src="/thick-chevron-left.svg" />
          </BackButton>
          {startingPoint !== "" ? (
            <InputContainer>
              <InvisibleButton />
              <div style={{ display: "flex", alignItems: "center" }}>
                <InputCircle backgroundColor="#04d9b2" />
                <Input name="startingPoint" placeholder={startingPoint} />
                <Text color="#d9d9d9" fontSize="10px">
                  변경
                </Text>
              </div>

              {destinationPoint !== "" ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <InputCircle backgroundColor="#04d9b2" />
                  <Input
                    onChange={onChange}
                    name="value"
                    value={value}
                    placeholder={destinationPoint}
                    required
                  />
                  <Text color="#d9d9d9" fontSize="10px">
                    변경
                  </Text>
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <InputCircle backgroundColor="#04d9b2" />
                  <Input
                    onChange={onChange}
                    name="value"
                    value={value}
                    placeholder="도착지"
                    required
                  />
                  <Text color="#d9d9d9" fontSize="10px">
                    변경
                  </Text>
                </div>
              )}
            </InputContainer>
          ) : (
            <InputContainer>
              <div style={{ display: "flex", alignItems: "center" }}>
                <InputCircle backgroundColor="#04d9b2" />
                <Input
                  onChange={onChange}
                  name="value"
                  value={value}
                  placeholder="출발지"
                  required
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 5px",
                    width: "40px",
                  }}
                >
                  <Text color="#d9d9d9" fontSize="10px">
                    변경
                  </Text>
                </div>
              </div>
            </InputContainer>
          )}
        </SearchContainer>

        <div
          id="map"
          className="map"
          style={{ width: "393px", height: "100vh" }}
        ></div>
        {keyword == "" ? <></> : <SearchResultComponent keyword={keyword} />}
        {destinationPoint !== "" ? (
          <div
            id="chooseRail"
            onClick={() => {
              navigate("/user/showrails", {
                state: {
                  starting: { startingX, startingY, startingPoint },
                  destination: { destinationX, destinationY, destinationPoint },
                },
              });
            }}
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "95%",
              left: "50%",
              display: "flex",
              width: "380px",
              height: "40px",
              zIndex: "8",
              backgroundColor: "#4764cd",
              bottom: "1%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <span style={{ padding: "10px 0px" }}>경로 검색</span>
          </div>
        ) : (
          <></>
        )}
      </Form>
    </MapContainer>
  );
};

export default Map;
