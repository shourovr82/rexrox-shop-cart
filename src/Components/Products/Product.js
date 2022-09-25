import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Products.css'



const Product = (props) => {
  const { name, img, seller, price, ratings } = props.product;



  return (
    <div className='product'>
      <img src={img} alt="not Available" />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>Price: ${price}</p>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings} stars</p>

      </div>
      <button onClick={() => props.handleAddToCart(props.product)} className='button-cart'>
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div >
  );
};

export default Product;