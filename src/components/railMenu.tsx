import styled from "styled-components";
import { Button, Logo, Text } from "./pointMenu";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  align-items: center;
`;
//3d00eb
const MenuItem = styled.div`
  margin: 0;
  padding: 20px 20px;
  border-top: 1px solid grey;
  background-color: white;
  display: flex;
  width: 100%;
  align-items: center;
`;

const TokenContent = styled.div`
  cursor: pointer;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

interface TokenImageInterface {
  url: string;
}
const TokenImage = styled.img<TokenImageInterface>`
  background-color: white;
  width: 60px; /* 아이콘의 너비 */
  height: 50px; /* 아이콘의 높이 */
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 50%;
`;
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

const MenuItemComponent = ({
  starting,
  destination,
  ticketAmount,
  tokenAmount,
}) => {
  const { data } = useQuery(SEE_PROFILE);
  const navigate = useNavigate();
  return (
    <MenuItem
      onClick={() =>
        navigate("/user/depositlog", {
          state: {
            userId: data?.seeProfile?.id,
            fundId: data?.seeProfile?.tickets[0]?.fund?.id,
            railName: [starting, destination],
            ticketAmount: ticketAmount,
            tokenAmount: tokenAmount,
            address: data?.seeProfile?.address,
          },
        })
      }
    >
      <TokenImage url="/ticket.png" />
      <TokenContent>
        <Text color="black" fontSize="17px">
          {starting.split(" ")[0]} - {destination.split(" ")[0]}
        </Text>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text color="black" fontSize="20px">
              {tokenAmount == 0 ? ticketAmount : tokenAmount}
            </Text>
            <Text color="grey" fontSize="10px">
              {tokenAmount == 0 ? ticketAmount * 4500 : tokenAmount}원(KRW)
            </Text>
          </div>
        </div>
      </TokenContent>
      <Logo src="/chevron-right.svg" width="30px" height="30px" />
    </MenuItem>
  );
};

export const RailMenu = () => {
  const { data } = useQuery(SEE_PROFILE);
  return (
    <>
      <Menu>
        <MenuItemComponent
          starting={"포인트 거래"}
          destination={""}
          ticketAmount={0}
          tokenAmount={data?.seeProfile?.tokenAmount}
        />
        {data?.seeProfile?.tickets.map((ticket) => {
          return (
            <MenuItemComponent
              starting={ticket.fund?.stations[0]?.name}
              destination={ticket.fund?.stations[1]?.name}
              ticketAmount={ticket?.amount}
              tokenAmount={0}
            />
          );
        })}
      </Menu>
    </>
  );
};
