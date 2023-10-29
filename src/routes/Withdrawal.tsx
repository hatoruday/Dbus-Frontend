import styled, { css } from "styled-components";
import { Text } from "../components/pointMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Error } from "../components/auth-components";
import { gql, useMutation, useQuery } from "@apollo/client";

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
  color: black;
  &:focus {
    outline: none; // Change this to the desired border color: ;
  }
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

const SEE_PROFILE = gql`
  query seeProfile {
    seeProfile {
      username
      tokenAmount
      id
      address
      tickets {
        amount
        fund {
          id
          stations {
            name
          }
        }
      }
    }
  }
`;

const TRANSFER = gql`
  mutation transfer($fundId: Int!, $amount: Int!, $withdrawAddress: String!) {
    transfer(
      fundId: $fundId
      amount: $amount
      withdrawAddress: $withdrawAddress
    ) {
      ok
      error
    }
  }
`;

export default function Withdrawal() {
  const location = useLocation();
  const navigate = useNavigate();
  const onCompleted = (data) => {
    navigate("/user");
  };
  const [transfer, { loading }] = useMutation(TRANSFER, { onCompleted });
  const { fundId, amount, railName } = location.state;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [wAddress, setWAddress] = useState("");
  const [settingAmount, setSettingAmount] = useState(0);
  const [error, setError] = useState("");
  const onWChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setWAddress(value);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    const parsingValue = parseInt(value, 10);
    setSettingAmount(parsingValue);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    console.log(typeof fundId, typeof settingAmount, typeof wAddress);
    if (loading || settingAmount === 0) return;
    try {
      transfer({
        variables: {
          fundId,
          amount: settingAmount,
          withdrawAddress: wAddress,
        },
      });
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  return (
    <DepositPage>
      <Text fontSize="25px" color="rgba(71, 100, 205, 0.9)">
        {railName[0].split(" ")[0]} / {railName[1].split(" ")[0]}
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
              {amount || 0}
            </Text>
            <Text color="black" fontSize="13pt">
              {fundId == 0 ? "POINT" : "TICKET"}
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
              {amount || 0}
            </Text>
            <Text color="black" fontSize="13pt">
              {fundId == 0 ? "POINT" : "TICKET"}
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
              backgroundColor: "white",
              padding: "0px 15px",
              width: "100%",
              height: "40px",
              display: "flex",
              alignItems: "center",
              border: "1px solid #d9d9d9",
            }}
          >
            <Input
              onChange={onWChange}
              name="amount"
              value={wAddress}
              placeholder="보낼 주소를 입력해주세요"
              required
            />
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
                value={settingAmount}
                placeholder="보낼 수량을 입력해주세요"
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
                onClick={() => {
                  setSelectedIndex(1);
                  setSettingAmount(amount * 0.1);
                }}
              >
                <Text color="#6a6868" fontSize="10pt">
                  10%
                </Text>
              </AmountBox>
              <AmountBox
                type="button"
                selected={selectedIndex == 2}
                onClick={() => {
                  setSelectedIndex(2);
                  setSettingAmount(amount * 0.25);
                }}
              >
                <Text color="#6a6868" fontSize="10pt">
                  25%
                </Text>
              </AmountBox>
              <AmountBox
                type="button"
                selected={selectedIndex == 3}
                onClick={() => {
                  setSelectedIndex(3);
                  setSettingAmount(amount * 0.5);
                }}
              >
                <Text color="#6a6868" fontSize="10pt">
                  50%
                </Text>
              </AmountBox>
              <AmountBox
                type="button"
                selected={selectedIndex == 4}
                onClick={() => {
                  setSelectedIndex(4);
                  setSettingAmount(amount);
                }}
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
                {settingAmount} {fundId == 0 ? "POINT" : "TICKET"}
              </Text>
            </div>
          </FormInformation>
          <Input type="submit" value={loading ? "Loading..." : "출금하기"} />
          {error !== "" ? <Error>{error}</Error> : null}
        </Form>
      </DepositMainPage>
    </DepositPage>
  );
}
