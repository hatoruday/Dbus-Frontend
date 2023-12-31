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
import { gql, useMutation } from "@apollo/client";
import LoadingScreen from "../components/loading-screen";

const AcheivementRateBar = styled.div`
  width: 90%;
  height: 30px;
  border-radius: 30px;
  background-color: #d9d9d9;
  display: flex;
  position: relative;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
//3d00eb
const MenuItem = styled.div`
  margin: 0;
  padding: 5px 20px;
  border-top: 1px solid grey;
  background-color: rgba(71, 100, 205, 0.15);
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const FundingComponent = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DownComponent = styled.div`
  background-color: rgba(71, 100, 205, 0.12);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  display: f;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #4764cd;
`;

const DONATE_FUND = gql`
  mutation donateFund($fundId: Int!, $amount: Int!) {
    donateFund(fundId: $fundId, amount: $amount) {
      ok
      error
    }
  }
`;

export default function Donate({}) {
  const location = useLocation();
  const [donateFund, { loading }] = useMutation(DONATE_FUND);
  const state = location.state;
  const {
    starting: { startingX, startingY, startingPoint },
    destination: { destinationX, destinationY, destinationPoint },
    fund: { fundIdx, totalAmount, currentAmount, totalNumber, currentNumber },
  } = location.state;
  const acheivementRate =
    (currentAmount / totalAmount) * 100 > 100
      ? 100
      : (currentAmount / totalAmount) * 100;

  const navigate = useNavigate();

  return loading ? (
    <LoadingScreen />
  ) : (
    <FundingComponent>
      <DownComponent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "start",
            padding: "0px 20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "start",
              padding: "20px 0px",
            }}
          >
            <span
              style={{
                fontWeight: "600",
                fontSize: "12pt",
                color: "black",
              }}
            >
              Funding
            </span>
          </div>
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
                펀딩중
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

          <TitleFundingContainer>
            <Text color="black">
              {startingPoint} - {destinationPoint}
            </Text>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
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
                      {" KRW"}
                    </StrongText>
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
      <Menu>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 2000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            1 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            2000P
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 4000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            2 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            4000P
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 6000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            3 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            6000P
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 10000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            5 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            10000P
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 20000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            10 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            20000P
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 30000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            15 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            30000P
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 60000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            20 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            40000P
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 1000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            30 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            60000P
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 100000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            50 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            100000P
          </Button>
        </MenuItem>
        <MenuItem
          onClick={() => {
            donateFund({
              variables: {
                fundId: fundIdx,
                amount: 200000,
              },
            });
          }}
        >
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            100 티켓
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            200000P
          </Button>
        </MenuItem>
      </Menu>
      <BottomBar>
        <Text
          onClick={() => {
            navigate("/user/funding", {
              state: {
                starting: { startingX, startingY, startingPoint },
                destination: { destinationX, destinationY, destinationPoint },
              },
            });
          }}
        >
          펀딩하기
        </Text>
      </BottomBar>
    </FundingComponent>
  );
}
