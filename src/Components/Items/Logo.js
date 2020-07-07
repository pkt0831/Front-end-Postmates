import React from 'react';
import styled from 'styled-components';

const LogoStyle = styled.a`
  font-family: PostmatesStd, 'Helvetica Neue', Helvetica;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 72px;
  cursor: pointer;
`;

const Logo = ({ state }) => {
  return <LogoStyle>{state.title}</LogoStyle>;
};

export default Logo;
