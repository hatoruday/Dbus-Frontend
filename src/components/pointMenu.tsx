import styled from "styled-components";

interface ButtonProps {
  color?: string;
  fontSize?: string;
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  font-size: ${(props) => props.fontSize};
  left: 10%;
  padding: 5px 15px;
  color: white;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  border: 0;
  width: ${(props) => props.width};
`;

const BottomInformation = styled.div`
  border-top: 2px solid grey;
  height: 20%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 10px;
`;

interface IconProps {
  color?: string;
  width?: string;
  height?: string;
}

export const Icon = styled.div<IconProps>`
  width: ${(props) => props.width || "40px"};
  height: ${(props) => props.height || "40px"};
  color: ${(props) => props.color || "black"};
`;

interface TextProps {
  fontSize?: string;
  color?: string;
}
export const Text = styled.text<TextProps>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

interface LogoProps {
  width?: string;
  height?: string;
  color?: string;
}
export const Logo = styled.img<LogoProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
`;

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
  padding: 10px 20px;
  border-top: 1px solid grey;
  background-color: rgba(71, 100, 205, 0.15);
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PointMenu = () => {
  return (
    <>
      <Menu>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            1000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            1000원
          </Button>
        </MenuItem>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            2000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            2000원
          </Button>
        </MenuItem>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            3000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            3000원
          </Button>
        </MenuItem>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            5000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            5000원
          </Button>
        </MenuItem>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            10000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            10000원
          </Button>
        </MenuItem>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            15000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            15000원
          </Button>
        </MenuItem>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            20000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            20000원
          </Button>
        </MenuItem>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            30000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            30000원
          </Button>
        </MenuItem>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            50000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            50000원
          </Button>
        </MenuItem>
        <MenuItem>
          <Text color="rgba(71, 100, 205, 0.85)" fontSize="20px">
            100000 포인트
          </Text>
          <Button color="rgba(71, 100, 205, 0.8)" fontSize="15px" width="95px">
            100000원
          </Button>
        </MenuItem>
      </Menu>
      <BottomInformation>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingTop: "5px",
          }}
        >
          <Text color="grey" fontSize="14px">
            포인트 이용안내
          </Text>
          <Logo width="30px" height="30px" src="/chevron-down.svg"></Logo>
        </div>
      </BottomInformation>
    </>
  );
};
