import React, { useState } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleMouseEnter = () => {
    if (item.img2) {
      setShowSecondImage(true);
    }
  };

  const handleMouseLeave = () => {
    if (item.img2) {
      setShowSecondImage(false);
    }
  };

  const handleClick = () => {
    console.log(item.category);
  };

  return (
    <Link 
      to={{
        pathname: `/product/${item._id}`,
        state: { productData: item, itemId: item._id }  // Pass item data and item ID via state
      }} 
      className="card-link"
    >
      <div className="card">
        <div 
          className="image"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {item.isNew && <span>New Season</span>}
          {item.isSale && <span className="sale-tag">Sale</span>}
          <img
            src={showSecondImage && item.img2 ? item.img2 : item.img}
            alt={item.title}
            className='mainImg'
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          {item.oldPrice && item.isSale && <h3 className="old-price">&#x20B9;{item.oldPrice}</h3>}
          <h3 className={item.isSale ? "new-price" : ""}>
            &#x20B9;{item.isSale ? item.price : item.newPrice || item.price}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;