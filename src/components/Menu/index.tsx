import React from "react";
import styled from 'styled-components';


type MenuProps = {
 
  onSelect: (option: string) => void;
};

const Menu = ({ onSelect }: MenuProps) => {
  const handleSelect = (option: string) => {
    onSelect(option);
  };

  const options = ["illustration", "animation", "gameart"];


  return (
    <Wrapper>
      {options.map((option) => (
        <MenuOption key={option} onClick={() => handleSelect(option)}>
          {option}
        </MenuOption>
      ))}
    </Wrapper>
  );
};

export default Menu;


const Wrapper = styled.div`
display: flex;
margin: 8px
`;

const MenuOption = styled.button`
border: none;
background: #ffffff;
font-size: 20px;
color: #300f0a;
`;
