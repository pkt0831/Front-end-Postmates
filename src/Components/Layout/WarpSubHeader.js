import React from 'react';
import SubHeader from './SubHeader';
import SubBanner from './SubBanner';

const WarpSubHeader = ({
  page,
  getBackground,
  menuList,
  handleClickScrollTo,
  changeSubInput,
  dispatch,
}) => {
  return (
    <>
      <SubBanner page={page} getBackground={getBackground} />
      <SubHeader
        page={page}
        menuList={menuList}
        handleClickScrollTo={handleClickScrollTo}
        changeSubInput={changeSubInput}
        dispatch={dispatch}
      />
    </>
  );
};

export default WarpSubHeader;
