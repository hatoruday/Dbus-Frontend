import styled from "styled-components";
import { Button, Logo, PointMenu, Text } from "../components/pointMenu";
import { RailMenu } from "../components/railMenu";

const PointShopPage = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const DepositPage = styled.div`
  background-color: red;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const TopDepositPage = styled.div`
  background-color: rgba(71, 100, 205, 1);
  width: 100%;
  height: 100%;
`;

const BottomDepositPage = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;

export default function Deposit() {
  return (
    <DepositPage>
      <div
        style={{
          gap: "20px",
          display: "flex",
          paddingBottom: "20px",
        }}
      >
        <Text fontSize="25px">DBT</Text>
        <Button color="rgba(71, 100, 205, 0.35)" fontSize="10px">
          DBUS TOKEN
        </Button>
      </div>
      <TopDepositPage>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Text>총 보유갯수</Text>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <Text></Text>
              <span></span>
            </div>
            <span></span>
          </div>
        </div>
        <div></div>
      </TopDepositPage>
      <BottomDepositPage></BottomDepositPage>
    </DepositPage>
  );
}
