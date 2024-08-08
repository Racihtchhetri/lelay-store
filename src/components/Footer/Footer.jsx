import React from 'react';
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
        <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi architecto iure aliquam perspiciatis blanditiis sint corporis explicabo assumenda consectetur possimus.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sequi facere harum illo officia laborum at, nisi corporis consequuntur ea.</span>
        </div>
      </div>

      <div className="bottom">

        <div className="left">
          <span className='logo'>LeLay Store</span>
          <span className='copyright'> @copy copyright 2024. All rights reserved</span>
        </div>

       

      </div>
    </div>
  )
}
export default Footer;