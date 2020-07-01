import React from 'react';
import styled from 'styled-components';

const MainMenuWrap = styled.div`
  width: 350px;
  height: 100%;
  background: red;
`;
const StyleMenu = styled.a``;
const MainMenu = () => {
  return (
    <div>
      <MainMenuWrap>
        <StyleMenu>FOOD</StyleMenu>
        <StyleMenu>FRESH</StyleMenu>
        <StyleMenu>DRINKS</StyleMenu>
        <StyleMenu>ESSENTIALS</StyleMenu>
        <StyleMenu>CONVENIENCE</StyleMenu>
      </MainMenuWrap>
    </div>
  );
};
export default MainMenu;
