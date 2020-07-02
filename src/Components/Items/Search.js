import React from 'react';
import styled from 'styled-components';

const SearchWrap = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  align-items: center;
  /* background: green; */
`;
const SearchInput = styled.input`
  max-width: 380px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  border: none;
  font: 400 13.3333px Arial;
`;
const SearchIcon = styled.span`
  width: 50px;
  height: 50px;
  background: red;
`;
const Search = () => {
  return (
    <SearchWrap>
      <SearchIcon />
      <SearchInput placeholder="Search for anything..." />
    </SearchWrap>
  );
};

export default Search;
