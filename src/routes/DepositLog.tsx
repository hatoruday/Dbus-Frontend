import styled from "styled-components";
import { Button, Logo, Text } from "../components/pointMenu";

import {
  LogDiv,
  TopMenuItem,
  TransactionLog,
} from "../components/depositComponent";
import DropdownButton from "../components/dropdownButton";

const DepositPage = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const TopDepositPage = styled.div`
  background-color: rgba(71, 100, 205, 0.2);
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomDepositPage = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;

const DepositWithdrawelButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 5px 20px;
  border-top: 1px solid #d9d9d9;
  align-items: center;
  background-color: rgba(71, 100, 205, 0.2);
`;

const LogContainer = styled.div`
  display: flex;
  width: 100%;
`;

const LogTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const LogBottomContainer = styled.div``;

export default function DepositLog() {
  return (
    <DepositPage>
      <div
        style={{
          gap: "20px",
          display: "flex",
          paddingBottom: "20px",
        }}
      >
        <Text fontSize="25px" color="rgba(71, 100, 205, 0.9)">
          DBT
        </Text>
        <Button color="rgba(71, 100, 205, 0.35)" fontSize="10px">
          DBUS TOKEN
        </Button>
      </div>
      <TopDepositPage>
        <TopMenuItem
          description="총 보유갯수"
          amount="777.0000000"
          symbol="DBT"
          correspondingAmount="123,456"
          correspondingSymbol="KRW"
        />
        <TopMenuItem
          description="입/출금 가능"
          amount="365.0000000"
          symbol="DBT"
          correspondingAmount="123,456"
          correspondingSymbol="KRW"
        />
        <div></div>
      </TopDepositPage>
      <DepositWithdrawelButton>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Logo
            src="/arrow-right-on-rectangle.svg"
            width="35px"
            height="35px"
          />
          <Text fontSize="20px" color="rgba(71, 100, 205, 0.5)">
            입금하기
          </Text>
        </div>
        <div
          style={{ height: "100%", width: "2px", backgroundColor: "#d9d9d9" }}
        ></div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Logo src="/arrow-left-on-rectangle.svg" width="35px" height="35px" />
          <Text fontSize="20px" color="rgba(71, 100, 205, 0.5)">
            출금하기
          </Text>
        </div>
      </DepositWithdrawelButton>
      <BottomDepositPage>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 7px",
            alignItems: "center",
            borderBottom: "2px solid #D9D9D9",
          }}
        >
          <Text color="black" fontSize="22px">
            DBT 입출금 내역
          </Text>
          <DropdownButton />
        </div>
        <LogContainer>
          <LogTopContainer>
            <LogDiv
              isDeposit="입금"
              amount="105.00000000"
              symbol="DBT"
              time="2022.03.24 21:53"
              corrAmount="123,456"
              corrSymbol="KRW"
            />
          </LogTopContainer>
          <LogBottomContainer></LogBottomContainer>
        </LogContainer>
        <TransactionLog
          id="52ECKVNKL3234SDKNF128437893248923SADKFNB1239481239905JDAHF0B691234091Y43"
          status="입금 완료"
        />
        <LogContainer>
          <LogTopContainer>
            <LogDiv
              isDeposit="출금"
              amount="105.00000000"
              symbol="DBT"
              time="2022.03.24 21:53"
              corrAmount="123,456"
              corrSymbol="KRW"
            />
          </LogTopContainer>
          <LogBottomContainer></LogBottomContainer>
        </LogContainer>
        <TransactionLog
          id="52ECKVNKL3234SDKNF128437893248923SADKFNB1239481239905JDAHF0B691234091Y43"
          status="출금 완료"
        />
      </BottomDepositPage>
    </DepositPage>
  );
}
