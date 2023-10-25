import { Text } from "./pointMenu";

interface TopMenuItemInterface {
  description: string;
  amount: string;
  symbol: string;
  correspondingAmount: string;
  correspondingSymbol: string;
}

export const TopMenuItem = ({
  description,
  amount,
  symbol,
  correspondingAmount,
  correspondingSymbol,
}: TopMenuItemInterface) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 20px",
        height: "100%",
      }}
    >
      <Text color="black">{description}</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div style={{ paddingBottom: "5px" }}>
          <Text color="rgba(71, 100, 205, 0.6)" fontSize="12px">
            {amount}
          </Text>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              paddingLeft: "2px",
              color: "rgba(71, 100, 205, 0.8)",
            }}
          >
            {symbol}
          </span>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <Text fontSize="8px" color="grey">
            {correspondingAmount}
          </Text>
          <Text fontSize="8px" color="grey">
            {correspondingSymbol}
          </Text>
        </div>
      </div>
    </div>
  );
};

interface LogDivInterface {
  isDeposit: string;
  amount: string;
  symbol: string;
  time: string;
  corrAmount: string;
  corrSymbol: string;
}
export const LogDiv = ({
  isDeposit,
  amount,
  symbol,
  time,
  corrAmount,
  corrSymbol,
}: LogDivInterface) => {
  return (
    <div
      style={{
        padding: "10px 10px",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        borderBottom: "1px solid #d9d9d9",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "5px",
        }}
      >
        {isDeposit == "입금" ? (
          <Text color="red" fontSize="11pt">
            {isDeposit}
          </Text>
        ) : (
          <Text color="blue" fontSize="11pt">
            {isDeposit}
          </Text>
        )}

        <div>
          <Text color="#d9d9d9" fontSize="11pt">
            {amount}
          </Text>
          <span style={{ color: "#d9d9d9", fontSize: "11pt" }}>{symbol}</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text color="#d9d9d9" fontSize="10pt">
          {time}
        </Text>
        <div>
          <Text color="#d9d9d9" fontSize="10pt">
            {corrAmount}
          </Text>
          <span style={{ color: "#d9d9d9", fontSize: "10pt" }}>
            {corrSymbol}
          </span>
        </div>
      </div>
    </div>
  );
};

interface TransactionLogInterface {
  id: string;
  status: string;
}
export const TransactionLog = ({ id, status }: TransactionLogInterface) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "40px",
        justifyContent: "space-around",
        marginTop: "10px",
        borderBottom: "1px solid #d9d9d9",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "10px",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            width: "30%",
            marginRight: "10px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            padding: "5px 10px",
          }}
        >
          <Text color="#d9d9d9" fontSize="9pt">
            거래 ID
          </Text>
        </div>
        <span
          style={{
            color: "#d9d9d9",
            fontWeight: "bold",
            fontSize: "8pt",
            wordWrap: "break-word",
            width: "70%",
            marginLeft: "10px",
            marginRight: "10px",
            textDecoration: "underline",
          }}
        >
          {id}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "30%",
            marginRight: "10px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            padding: "5px 10px",
          }}
        >
          <Text color="#d9d9d9" fontSize="9pt">
            상태
          </Text>
        </div>
        <span
          style={{
            color: "#d9d9d9",
            fontWeight: "bold",
            fontSize: "8pt",
            wordWrap: "break-word",
            width: "70%",
            display: "flex",
            justifyContent: "start",
            marginLeft: "10px",
            marginRight: "10px",
            textDecoration: "underline",
          }}
        >
          {status}
        </span>
      </div>
    </div>
  );
};
