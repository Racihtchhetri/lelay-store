import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Product.scss';
import { AddShoppingCart, Balance, FavoriteBorder } from '@mui/icons-material';

const Product = () => {
  const location = useLocation();
  const { id } = useParams();
  const [productData, setProductData] = useState(location.state?.productData || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);

  useEffect(() => {
    if (!productData) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/products/${id}`);
          const data = await response.json();
          setProductData(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };

      fetchProduct();
    }
  }, [id, productData]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const images = [productData.img, productData.img2].filter(Boolean);

  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          {images.map((img, index) => (
            <img src={img} alt="" key={index} onClick={() => setSelectedImg(index)} />
          ))}
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>{productData.title}</h1>
        <span className='price'>&#x20B9;{productData.price}</span>
        {productData.oldPrice && <span className='oldPrice'>&#x20B9;{productData.oldPrice}</span>}
        <p>{productData.description}</p>

        <div className="quantity">
          <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>

        <button className='add'>
          <AddShoppingCart /> ADD TO CART
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorder /> ADD TO WISHLIST
          </div>
          <div className="item">
            <Balance /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: {productData.vendor || 'Unknown'}</span>
          <span>Product type: {productData.type || 'Unknown'}</span>
          <span>Tag: {productData.tags ? productData.tags.join(', ') : 'None'}</span>
        </div>
        <hr />

        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Product;
