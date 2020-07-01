import React from 'react';
import styled from 'styled-components';
import { Yellow } from '../Styles/Variables';

const MainHeaderBlock = styled.div`
  width:100%
  height:72px;
  padding: 0 0 0 20px;
  background:${({ BgColor }) => BgColor || Yellow};
  font-size:26px;
  font-weight:200px;
  letter-spacing:-1px;
`;

const MainHeader = () => {
  return <MainHeaderBlock>Postmates</MainHeaderBlock>;
};
export default MainHeader;
