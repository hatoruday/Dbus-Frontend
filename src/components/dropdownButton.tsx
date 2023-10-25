import React, { useState } from "react";
import styled from "styled-components";

const DropButton = styled.button`
  position: "relative";
  z-index: 1;
  border: 0px;
  width: 70px;
  height: 20px;
  padding: 1px 2px;
  display: flex;
  gap: 1px;
  font-size: 9pt;
  justify-content: center;
  align-items: center;
`;

const DropItem = styled.div`
  border: 0px;
  width: 70px;
  height: 20px;
  padding: 1px 2px;
  font-size: 9pt;
`;

const DropDownMenu = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;

  padding: 1px 0px;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
`;

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <DropButton onClick={() => setIsOpen(!isOpen)}>거래 전체 ▼</DropButton>

      {isOpen && (
        <DropDownMenu>
          <DropItem onClick={() => console.log("Option 1 clicked")}>
            Option1
          </DropItem>
          <DropItem onClick={() => console.log("Option 2 clicked")}>
            Option2
          </DropItem>
          <DropItem onClick={() => console.log("Option 3 clicked")}>
            Option3
          </DropItem>
        </DropDownMenu>
      )}
    </div>
  );
}

export default DropdownButton;
