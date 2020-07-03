// 0701 seungeun
import React from 'react';
import styled from 'styled-components';
import Logo from '../Items/Logo';
import Member from '../Items/Member';
// import Search from '../Items/Search';
// import MainMenu from '../Items/MainMenu';

const MainHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  padding: 0 15% 0 15%;
  background: ${(props) => props.background};
`;

const MainHeader = () => {
  // console.log(PageChange);
  return (
    <MainHeaderBlock>
      <Logo />
      {/* {page === 'Feed' ? <Search /> : ''}
      {page === 'Feed' ? <MainMenu /> : ''} */}
      <Member />
    </MainHeaderBlock>
  );
};

export default MainHeader;
