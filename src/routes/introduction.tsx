import RailButton from "../components/railBtn";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Content,
  DBUSImage,
  Dot,
  Down,
  DownIntroduction,
  Icon,
  IntroductionBar,
  IntroductionImage,
  IntroductionSubTitle,
  IntroductionTitle,
  NewDown,
  NewTop,
  OtherIcon,
  SubTitle,
  Top,
  Wrapper,
} from "../components/introduction-components";
import { Title } from "../components/auth-components";

interface InitIntroductionProps {
  setIndex: Dispatch<SetStateAction<number>>;
}

interface OtherIntroductionProps {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

interface currentIndexType {
  currentIndex: number;
}
const ProgressIndicator = ({ currentIndex }: currentIndexType) => {
  return (
    <div>
      <Dot active={currentIndex === 1} />
      <Dot active={currentIndex === 2} />
      <Dot active={currentIndex === 3} />
    </div>
  );
};

const introTitleArray: string[] = [
  "뭉치면 만들어지는 버스 노선",
  "지구와 사람을 모두 살리는 펀딩",
  "WEB3 기술을 통한 투명한 정보공개",
];

const introSubTitleArray: string[] = [
  "내가 타는 시간에만 분비는 버스노선. 이제는 스스로 만들자. 내가 직접 해당 시간 노선을 만들고 버스를 펀딩하여 버스의 수요 증명하고 버스를 추가로 운행 가능",
  "교통체증으로 추가로 소모되는 석유 자원 이로 인해 아픈 지구 나의 작은 펀딩 참여로 버스 타는 사람들을 지키고 지구도 살리자. 내가 투자를 하면 수요가 많은 노선 순 분배되는 쿼드라틱 펀딩 진행",
  "펀딩은 했는데 어디에 어떻게 사용되고 있는지 알 수 없었던 적 있으시죠? web3 blockchain 기술을 이용하여 펀딩 현황을 투명하게 공개하며 믿을 수 있는 정보를 제공합니다.",
];
const OtherIntroduction: React.FC<OtherIntroductionProps> = ({
  index,
  setIndex,
}) => {
  const path = `./photo${index}.jpeg`;
  return (
    <>
      <NewTop>
        <IntroductionImage src={path} />
      </NewTop>
      <NewDown>
        <IntroductionTitle>{introTitleArray[index - 1]}</IntroductionTitle>
        <IntroductionSubTitle>
          {introSubTitleArray[index - 1]}
        </IntroductionSubTitle>
        <IntroductionBar>
          <ProgressIndicator currentIndex={index} />
          <OtherIcon onClick={() => setIndex(index + 1)}>
            {" "}
            {/* onClick에서 바로 함수를 넘겨주면 undefined를 return 받음. -> typescript오류. -> arrayfunction을 사용해야함.*/}
            <svg
              color="blue"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </OtherIcon>
        </IntroductionBar>
      </NewDown>
    </>
  );
};
const InitIntroduction: React.FC<InitIntroductionProps> = ({ setIndex }) => {
  return (
    <>
      <Top>
        <Content>
          <Title>Dbus</Title>
          <SubTitle>함께 만드는 버스</SubTitle>
        </Content>
        <DBUSImage src="./dbus_logo.png" />
      </Top>
      <Down>
        <RailButton />
        <DownIntroduction onClick={() => setIndex(1)}>
          아직 dbus를 잘 모른다면?
          <Icon>
            dbus소개
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                clipRule="evenodd"
              />
            </svg>
          </Icon>
        </DownIntroduction>
      </Down>
    </>
  );
};

export default function Introduction() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (index === 4) {
      navigate("/login");
    }
  }, [index, navigate]);
  return (
    <Wrapper>
      {index == 0 ? (
        <InitIntroduction setIndex={setIndex} />
      ) : (
        <OtherIntroduction index={index} setIndex={setIndex} />
      )}
    </Wrapper>
  );
}
