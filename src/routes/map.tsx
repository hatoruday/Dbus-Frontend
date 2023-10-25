import styled, { css } from "styled-components";
import { Text } from "../components/pointMenu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Error } from "../components/auth-components";

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
  padding: 5px 7%;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin-top: 10%;
  height: 10%;
  border-bottom: 1px solid #d9d9d9;
`;

const DepositMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  padding-top: 20px;

  height: 100%;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
`;

export const Input = styled.input`
  background-color: white;
  width: 100%;
  border: none;
  opacity: 1;
  padding: 10px 20px;
  font-size: 11pt;
  color: #ffffff;

  &::placeholder {
    color: white; /* Placeholder 텍스트의 색상을 회색으로 설정 */
    opacity: 1;
  }

  &[type="submit"] {
    font-size: 17pt;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 50px;
    background-color: #4764cd;
    color: white;
    cursor: pointer;
  }
`;

const RevokeButton = styled.button`
  background-color: white;
  border: none;
  font-size: 12pt;
  color: #d9d9d9;
  font-weight: 200;
  padding: 3px 10px;
`;

const AmountRatioSelection = styled.div`
  display: flex;
  width: 100%;
  border: none;
  flex-direction: row;
  padding: 15px 0px;
`;

interface AmountBoxInterface {
  selected?: boolean;
}
const AmountBox = styled.button<AmountBoxInterface>`
  background-color: white;
  width: 25%;
  padding: 10px 30px;
  border: 1px solid #d9d9d9;
  ${({ selected }) =>
    selected &&
    css`
      border-color: #4764cd;
      color: #4764cd;
    `}
`;

const FormInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 7%;
`;

interface WithdrawalInterface {
  possibleAmount?: number;
}
export default function Withdrawal({ possibleAmount }: WithdrawalInterface) {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "amount") {
      setAmount(value);
    }
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || amount === "") return;
    try {
      setLoading(true);
      navigate("/wallet/detail");
    } catch (e) {
      // error implementation
    } finally {
      setLoading(false);
    }
  };
  return (
    <DepositPage>
      <Text fontSize="25px" color="rgba(71, 100, 205, 0.9)">
        DBT 출금하기
      </Text>
      <AddressTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text color="black" fontSize="13pt">
            출금가능
          </Text>
          <div style={{ display: "flex", gap: "5px" }}>
            <Text color="black" fontSize="13pt">
              {possibleAmount || 0}
            </Text>
            <Text color="black" fontSize="13pt">
              DBT
            </Text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text color="black" fontSize="13pt">
            출금한도
          </Text>
          <div style={{ display: "flex", gap: "5px" }}>
            <Text color="black" fontSize="13pt">
              {possibleAmount || 0}
            </Text>
            <Text color="black" fontSize="13pt">
              DBT
            </Text>
          </div>
        </div>
      </AddressTitle>
    </DepositPage>
  );
}
