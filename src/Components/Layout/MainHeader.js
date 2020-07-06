// 0701 seungeun
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../Items/Logo';
import Member from '../Items/Member';
import Search from '../Items/Search';
import MainMenu from '../Items/MainMenu';

const MainHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  padding: 0 15% 0 15%;
  background: ${(props) => props.background};
`;

const MainHeader = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <MainHeaderBlock>
      <Logo />
      {hidden === false ? '' : <Search />}
      {/* {page === 'Feed' ? <Search /> : ''}
      {page === 'Feed' ? <MainMenu /> : ''} */}
      {hidden === false ? '' : <MainMenu />}
      <Member hidden={hidden} setHidden={setHidden} />
    </MainHeaderBlock>
  );
};

export default MainHeader;
