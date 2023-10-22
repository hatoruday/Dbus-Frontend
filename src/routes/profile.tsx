import styled from "styled-components";

// 배경 컨테이너 스타일
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* 원하는 높이 설정 */
  display: grid;
  align-items: start;
  overflow: hidden;
`;

const GradientContainer = styled.div`
  width: 100%;
  height: 50%; /* 원하는 높이 설정 */
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NameRoleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RetainingTikectContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const UserProfilePage = () => {
  return (
    <BackgroundContainer>
      <GradientContainer></GradientContainer>
      <Circle>
        <ContentContainer>
          <NameRoleContainer></NameRoleContainer>
        </ContentContainer>
      </Circle>
    </BackgroundContainer>
  );
};

export default UserProfilePage;
