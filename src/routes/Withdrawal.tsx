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

      <DepositMainPage>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            padding: "0px 7%",
            height: "50px",
          }}
        >
          <Text color="#d9d9d9" fontSize="12pt">
            출금 네트워크
          </Text>
        </div>
        <div
          style={{
            width: "100%",
            height: "40px",
            border: "none",

            display: "flex",
            alignItems: "center",
            padding: "10px 7%",
          }}
        >
          <div
            style={{
              backgroundColor: "#d9d9d9",
              padding: "0px 15px",
              width: "100%",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text fontSize="11pt" color="rgba(0, 0, 0, 0.2)">
              DBUS TOKEN
            </Text>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            width: "100%",
            padding: "20px 7%",
          }}
        >
          <Text color="black" fontSize="17px">
            출금수량
          </Text>
        </div>
        <Form onSubmit={onSubmit}>
          <FormInformation>
            <div
              style={{
                border: "1px solid #d9d9d9",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Input
                onChange={onChange}
                name="amount"
                value={amount}
                placeholder="사용자 이름, 이메일 주소 또는 휴대폰 번호"
                type="number"
                required
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: "15px",
                }}
              >
                <RevokeButton>X</RevokeButton>
                <Text color="#d9d9d9" fontSize="12pt">
                  DBT
                </Text>
              </div>
            </div>
            <AmountRatioSelection>
              <AmountBox
                type="button"
                selected={selectedIndex == 1}
                onClick={() => setSelectedIndex(1)}
              >
                <Text color="#6a6868" fontSize="10pt">
                  10%
                </Text>
              </AmountBox>
              <AmountBox
                type="button"
                selected={selectedIndex == 2}
                onClick={() => setSelectedIndex(2)}
              >
                <Text color="#6a6868" fontSize="10pt">
                  25%
                </Text>
              </AmountBox>
              <AmountBox
                type="button"
                selected={selectedIndex == 3}
                onClick={() => setSelectedIndex(3)}
              >
                <Text color="#6a6868" fontSize="10pt">
                  50%
                </Text>
              </AmountBox>
              <AmountBox
                type="button"
                selected={selectedIndex == 4}
                onClick={() => setSelectedIndex(4)}
              >
                <Text color="#6a6868" fontSize="10pt">
                  100%
                </Text>
              </AmountBox>
            </AmountRatioSelection>
            <div
              style={{
                borderTop: "1px solid #d9d9d9",
                marginTop: "5%",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                padding: "10px 10px",
                paddingTop: "30px",
              }}
            >
              <Text color="rgba(0, 0, 0, 0.5)" fontSize="12pt">
                수수료
              </Text>

              <Text color="black" fontSize="12pt">
                0.1DBT
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                padding: "5px 10px",
                height: "50%",
              }}
            >
              <Text color="rgba(0, 0, 0, 0.5)" fontSize="12pt">
                총출금
              </Text>

              <Text color="black" fontSize="12pt">
                160DBT
              </Text>
            </div>
          </FormInformation>
          <Input type="submit" value={isLoading ? "Loading..." : "출금하기"} />
          {error !== "" ? <Error>{error}</Error> : null}
        </Form>
      </DepositMainPage>
    </DepositPage>
  );
}
