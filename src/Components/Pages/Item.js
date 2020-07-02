/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import StoreIndividual from '../Layout/StoreIndividual';
import MenuList from '../Layout/MenuList';
// FIXME: 희진 -itemPopup 작업
// import ItemPopup from '../Items/ItemPopup';
import MainHeader from '../Layout/MainHeader';

const StorePageBlock = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemPage = ({ storeData }) => {
  return (
    <StorePageBlock>
      <MainHeader page="Item" />
      <StoreIndividual storeData={storeData} />
      <MenuList storeData={storeData} />
    </StorePageBlock>
  );
};

export default ItemPage;
