import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The Lean Startup</p>

        <p className='product__price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className='product__rating'>
          <p>🌟</p>
        </div>
      </div>

      <img
        src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81-QB7nDh4L.jpg'
        alt=''
      />
      <button>Add to basket</button>
  
    </div>
  );
};

export { Products };
