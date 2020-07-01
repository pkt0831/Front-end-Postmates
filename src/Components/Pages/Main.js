import React from 'react';
import styled from 'styled-components';
import MainHeader from '../Layout/MainHeader';

const MainWrappterBlock = styled.div`
  width: 100%;
`;
const MainPage = () => {
  return (
    <div>
      <MainWrappterBlock>
        <MainHeader />
        {/* <h1>Main page</h1> */}
      </MainWrappterBlock>
    </div>
  );
};

export default MainPage;
