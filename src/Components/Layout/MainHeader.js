// 0701 seungeun
import React, { useRef } from 'react';
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
  // const [hidden, setHidden] = useState(true);
  // const changeHeader = () => {
  //   setHidden(false);
  // };
  // console.log(changeHeader);
  const inputRef = useRef();
  const initInput = () => {
    console.log('initInput');
    inputRef.current.value = '';
    inputRef.current.focus();
  };
  return (
    <MainHeaderBlock>
      <Logo />
      <Search inputRef={inputRef} />
      {/* {hidden === false ? '' : <Search />} */}
      {/* {page === 'Feed' ? <Search /> : ''}
      {page === 'Feed' ? <MainMenu /> : ''} */}
      {/* {hidden === false ? '' : <MainMenu />} */}
      <MainMenu />
      <Member initInput={initInput} />
    </MainHeaderBlock>
  );
};

export default MainHeader;
