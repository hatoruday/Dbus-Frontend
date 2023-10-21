import styled from "styled-components";

// 배경 컨테이너 스타일
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* 원하는 높이 설정 */
  background: linear-gradient(to bottom, #4764cd, #ffffff);
  display: flex;
  align-items: center;
`;
// 원 스타일
const Circle = styled.div`
  width: calc(100% + 300%);
  height: 80%;

  background-color: white; /* 흰색 배경 색상 설정 */
  border-radius: 50%; /* 원 모양으로 설정 */
`;

const UserProfilePage = () => {
  return (
    <BackgroundContainer>
      <Circle />
    </BackgroundContainer>
  );
};

export default UserProfilePage;
