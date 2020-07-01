import React from 'react';
import styled from 'styled-components';

const LogoStyle = styled.a`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 26px;
  font-weight: 400;
  line-height: 72px;
  cursor: pointer;
`;

const Logo = () => {
  return <LogoStyle>Postmates</LogoStyle>;
};

export default Logo;
