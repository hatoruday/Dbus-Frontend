import styled from "styled-components";
import { Button, Logo, Text } from "./pointMenu";

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

export const RailMenu = () => {
  return (
    <>
      <Menu>
        <MenuItem>
          <TokenImage url="/xrp-logo.png" />
          <TokenContent>
            <Text color="black" fontSize="20px">
              DBT
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Text color="black" fontSize="13px">
                365.000000
              </Text>
              <Text color="grey" fontSize="5px">
                5만 4천원(KRW)
              </Text>
            </div>
          </TokenContent>
          <Logo src="/chevron-right.svg" width="30px" height="30px" />
        </MenuItem>
        <MenuItem>
          <TokenImage url="/ethe-logo.png" />
          <TokenContent>
            <Text color="black" fontSize="20px">
              인하/주안
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Text color="black" fontSize="13px">
                0.00000000
              </Text>
              <Text color="grey" fontSize="5px">
                5만 4천원(KRW)
              </Text>
            </div>
          </TokenContent>
          <Logo src="/chevron-right.svg" width="30px" height="30px" />
        </MenuItem>
        <MenuItem>
          <TokenImage url="/binance-logo.png" />
          <TokenContent>
            <Text color="black" fontSize="20px">
              강남역/인하
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Text color="black" fontSize="13px">
                512
              </Text>
              <Text color="grey" fontSize="5px">
                5만 4천원(KRW)
              </Text>
            </div>
          </TokenContent>
          <Logo src="/chevron-right.svg" width="30px" height="30px" />
        </MenuItem>
        <MenuItem>
          <TokenImage url="/xrp-logo.png" />
          <TokenContent>
            <Text color="black" fontSize="20px">
              양재/여의도
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Text color="black" fontSize="13px">
                365.000000
              </Text>
              <Text color="grey" fontSize="5px">
                5만 4천원(KRW)
              </Text>
            </div>
          </TokenContent>
          <Logo src="/chevron-right.svg" width="30px" height="30px" />
        </MenuItem>
        <MenuItem>
          <TokenImage url="/xrp-logo.png" />
          <TokenContent>
            <Text color="black" fontSize="20px">
              분당/강남
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Text color="black" fontSize="13px">
                365.000000
              </Text>
              <Text color="grey" fontSize="5px">
                5만 4천원(KRW)
              </Text>
            </div>
          </TokenContent>
          <Logo src="/chevron-right.svg" width="30px" height="30px" />
        </MenuItem>
      </Menu>
    </>
  );
};
