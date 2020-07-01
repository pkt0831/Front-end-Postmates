import React from 'react';
import styled from 'styled-components';

const SearchWrap = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  align-items: center;
  background: green;
`;
const SearchInput = styled.input`
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  background-color: -internal-light-dark-color(
    rgb(255, 255, 255),
    rgb(59, 59, 59)
  );
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  border-style: inset;
  border-color: -internal-light-dark-color(
    rgb(118, 118, 118),
    rgb(195, 195, 195)
  );
  border-image: initial;
`;
const SearchSvg = styled.span`
  width: 50px;
  height: 50px;
  background: red;
`;
const Search = () => {
  return (
    <SearchWrap>
      <SearchSvg />
      <SearchInput placeholder="Search for anything..." />
    </SearchWrap>
  );
};

export default Search;
