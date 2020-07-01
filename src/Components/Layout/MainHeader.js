// 0701 seungeun
import React from 'react';
import styled from 'styled-components';
import Logo from '../Items/Logo';
import Member from '../Items/Member';

const MainHeaderBlock = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  padding: 0 15% 0 15%;
  /* background: #ffdf18; */
`;

const MainHeader = () => {
  return (
    <MainHeaderBlock>
      <Logo />
      <Member />
    </MainHeaderBlock>
  );
};

export default MainHeader;
