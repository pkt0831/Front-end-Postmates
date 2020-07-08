import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import FavoritesCategory from './FavoritesCategory';
import MenuCategory from './MenuCategory';
import Media from '../../Style/Media';
import { initCategoryRef, setCategoryRef } from '../../Modules/RefReducer';

const StoreBlock = styled.div`
  max-width: 1024px;

  ${Media.tablet`
  padding: 0 24px;
  `}
  ${Media.mobile`
  padding: 0 24px;
  `}
`;

const MenuList = ({ storeData, subInput }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initCategoryRef());
  }, [dispatch]);
  console.log(storeData.menu_category.length);
  return (
    <StoreBlock>
      <FavoritesCategory />
      <ul>
        {storeData.menu_category.map((item) => (
          <MenuCategory
            key={`itemKey-${item.id}`}
            itemKey={item.id}
            category={item.name}
            list={item.menu}
            setCategoryRef={setCategoryRef}
            dispatch={dispatch}
            subInput={subInput}
          />
        ))}
      </ul>
    </StoreBlock>
  );
};

export default MenuList;
