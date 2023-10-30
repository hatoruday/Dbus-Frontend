import styled from "styled-components";
import { Button, Logo, PointMenu, Text } from "../components/pointMenu";
import { RailMenu } from "../components/railMenu";
import { gql, useQuery } from "@apollo/client";

const PointShopPage = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
const ShopTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
  color: black;
`;

interface PointShopProps {
  isDetail: boolean;
}

const SEE_PROFILE = gql`
  query seeProfile {
    seeProfile {
      username
      tokenAmount
      id
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

export default function PointShop({ isDetail }: PointShopProps) {
  const { data } = useQuery(SEE_PROFILE);

  return (
    <PointShopPage>
      <div
        style={{
          fontSize: "20px",
          padding: "10px 10px",
          width: "100%",
          textAlign: "start",
          color: "black",
        }}
      >
        {isDetail ? "Token" : "Point shop"}
      </div>
      <div
        style={{
          paddingTop: "10px",
          paddingLeft: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyContent: "center",
          backgroundColor: "white",
          width: "100%",
        }}
      >
        {isDetail ? (
          <div>
            <Button color="#4764cd" fontSize="18px" width="90px">
              입/출금
            </Button>
          </div>
        ) : (
          <div>
            <Button color="#4764cd" fontSize="18px" width="70px">
              구매
            </Button>
          </div>
        )}

        <ShopTitle>{isDetail ? "" : "KRW/POINT"}</ShopTitle>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          padding: "10px 10px",
          alignContent: "center",
          justifyContent: "start",
          width: "100%",
        }}
      >
        {isDetail ? (
          <Logo width="20px" height="20px" src="/search.svg" />
        ) : (
          <Logo width="20px" height="20px" src="/card.svg" />
        )}
        {isDetail ? (
          <Text color="black" fontSize="18px">
            토큰 / 노선 검색
          </Text>
        ) : (
          <>
            {" "}
            <Text color="black" fontSize="18px">
              현재 보유하고 있는 포인트
            </Text>
            <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
              {data?.seeProfile?.tokenAmount}P
            </Text>
          </>
        )}
      </div>
      {isDetail ? <RailMenu /> : <PointMenu />}
    </PointShopPage>
  );
}
