import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className='header'>
      <img
        className='header__logo'
        src='https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695'
        alt='amzn-logo'
      />
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'></div>
      <div className='header__option'>
        <span className='header__optionLineOne'>Hello Guest</span>
        <span className='header_optionLineTwo'>Sign In</span>
      </div>
      <div className='header__option'>
        <span className='header__optionLineOne'>Returns</span>
        <span className='header_optionLineTwo'>& orders</span>
      </div>
      <div className='header__option'>
        <span className='header__optionLineOne'>Your</span>
        <span className='header_optionLineTwo'>Prime</span>
      </div>
      <div className='header__optionBasket'>
        <ShoppingBasketIcon />
        <span className='header_optionLineTwo header__BasketCount'>0</span>
      </div>
    </div>
  );
};

export { Header };
