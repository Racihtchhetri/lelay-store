import React, { useState, useEffect } from 'react';
import './Products.scss';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';

const categoryNames = {
  1: 'women',
  2: 'men',
  3: 'kids'
};

const Products = () => {
  const { catId } = useParams(); // Category ID from the route
  const [products, setProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1999);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const category = categoryNames[catId] || ''; // Default to an empty string if catId is invalid
        const url = category
          ? `http://localhost:5000/api/products?category=${category}`
          : 'http://localhost:5000/api/products';

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products data:', error);
      }
    };

    fetchProducts();
  }, [catId]);

  const filteredProducts = products
    .filter(product => product.price <= maxPrice)
    .sort((a, b) => {
      if (sort === 'asc') return a.price - b.price;
      if (sort === 'desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>499</span>
            <input
              type="range"
              min={0}
              max={1999}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              value="desc"
              id='desc'
              name='price'
              onChange={() => setSort('desc')}
            />
            <label htmlFor="desc">High to Low</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              value="asc"
              id='asc'
              name='price'
              onChange={() => setSort('asc')}
            />
            <label htmlFor="asc">Low to High</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          src="https://images.pexels.com/photos/3605015/pexels-photo-3605015.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Category"
          className='catImg'
        />

        <div className="list">
          <List products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;
