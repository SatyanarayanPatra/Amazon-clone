import React from 'react';
import './Home.css';
import { Products } from './Products';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://m.media-amazon.com/images/I/71aJVWrz15L._SX3000_.jpg'
          alt='amazon landing image'
        />
      </div>

      <div className='home__row'>
        <Products />
        <Products />
      </div>
    </div>
  );
};

export { Home };
