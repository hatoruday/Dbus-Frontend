import styled from "styled-components";
import { Logo, Text } from "../components/pointMenu";
import { useLocation } from "react-router-dom";

const DepositPage = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const AddressTitle = styled.div`
  display: flex;
  padding: 5px 15px;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  height: 11%;
  align-items: flex-end;
  padding-bottom: 5%;
`;

const DepositButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 12px;

  border-radius: 25%;
  background-color: rgba(71, 100, 205, 0.9);
`;

const DepositMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 15px;
  height: 80%;
`;

export default function Deposit() {
  const location = useLocation();
  const { address } = location.state;
  return (
    <DepositPage>
      <Text fontSize="25px" color="rgba(71, 100, 205, 0.9)">
        DBT 입금하기
      </Text>
      <AddressTitle>
        <Text color="black" fontSize="16pt">
          내 DBT 입금 주소
        </Text>
        <DepositButton>
          <Text color="white">공유</Text>
        </DepositButton>
      </AddressTitle>
      <DepositMainPage>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            height: "50px",
          }}
        >
          <Text color="#d9d9d9" fontSize="12pt">
            입금 네트워크
          </Text>
        </div>
        <div
          style={{
            width: "100%",
            height: "40px",
            border: "none",
            backgroundColor: "#d9d9d9",
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
          }}
        >
          <Text fontSize="11pt" color="rgba(0, 0, 0, 0.2)">
            DBUS
          </Text>
        </div>
        <div
          style={{
            width: "70%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Logo src="/qrcode.svg" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            height: "10%",
            alignItems: "center",
          }}
        >
          <Text color="#d9d9d9" fontSize="12pt">
            입금 주소
          </Text>
        </div>
        <div
          style={{ display: "flex", justifyContent: "start", width: "100%" }}
        >
          <div style={{ width: "80%", wordWrap: "break-word" }}>
            <Text color="#d9d9d9" fontSize="12pt">
              {address}
            </Text>
          </div>

          <DepositButton>
            <Text color="white">복사</Text>
          </DepositButton>
        </div>
      </DepositMainPage>
    </DepositPage>
  );
}
