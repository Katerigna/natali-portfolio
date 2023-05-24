import React from "react";
import styled from 'styled-components';
// import girl from './img/girl.png'
// import house from './img/house.png'
// import armor from './components/armor.png';
// import indiana from './components/indiana.png'


type Props = {
 
  onSelect: (option: string) => void;
};

const ProjectList = ({ onSelect }: Props) => {
  const handleSelect = (option: string) => {
    onSelect(option);
  };

  const projects = [girl, house, armor, indiana];


  return (
    <Wrapper>
      {projects.map((project) => (
        <MenuOption key={project} onClick={() => handleSelect(project)} src={project}>
          
        </MenuOption>
      ))}
    </Wrapper>
  );
};

export default ProjectList;


const Wrapper = styled.div`
// display: grid;
margin: 8px
`;

const MenuOption = styled.img`
height: 400px;
width: 400px;
`;
