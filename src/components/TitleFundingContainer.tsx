import { useLocation, useNavigate } from "react-router-dom";
import { TitleFundingContainer } from "../routes/ShowRails";
import { Button, Text } from "./pointMenu";
import styled from "styled-components";

export const AcheivementRateBar = styled.div`
  width: 70%;
  height: 30px;
  border-radius: 30px;
  background-color: #d9d9d9;
  display: flex;
  position: relative;
`;

interface AchievementInterface {
  rate: number;
}
export const Achievment = styled.div<AchievementInterface>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.rate > 100 ? 100 : props.rate)}%;
  left: 0%;
  height: 100%;
  border-radius: 30px;
  background-color: #4764cd;
`;

export const NotAchievment = styled.div<AchievementInterface>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100 - ${(props) => props.rate}%;
  right: 0%;
  height: 100%;
  border-radius: 30px;
  background-color: #aeaeae;
`;
export const StrongText = styled.div`
  font-size: 9pt;
  text-align: center;
`;
export const TitkcTicketContainer = ({
  startingPoint,
  destinationPoint,
  totalAmount,
  currentAmount,
  totalNumber,
  currentNumber,
  fundIdx,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    starting: { startingX, startingY },
    destination: { destinationX, destinationY },
  } = location.state;
  const rate = (currentAmount / totalAmount) * 100;

  return (
    <TitleFundingContainer>
      <Text color="black">
        {startingPoint} - {destinationPoint}
      </Text>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <AcheivementRateBar id="acheivementbar">
          <Achievment rate={rate}>
            <div
              style={{
                position: "absolute",
                left: "20%",
                width: "100px",
                zIndex: "1",
              }}
            >
              <StrongText>달성률 {rate > 100 ? 100 : rate} %</StrongText>
            </div>
          </Achievment>
          <NotAchievment rate={rate}>
            <div
              style={{
                position: "absolute",
                right: "0%",
                width: "100px",
                zIndex: "1",
              }}
            >
              <StrongText>
                {totalAmount - currentAmount < 0
                  ? 0
                  : totalAmount - currentAmount}{" "}
                KRW
              </StrongText>
            </div>
          </NotAchievment>
        </AcheivementRateBar>
        <Button
          color="#4764cd"
          onClick={() => {
            navigate("/user/showfund", {
              state: {
                starting: { startingX, startingY, startingPoint },
                destination: { destinationX, destinationY, destinationPoint },
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
          Fund
        </Button>
      </div>
    </TitleFundingContainer>
  );
};
