import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card'; // Import Card component
import './List.scss'; // Ensure you have the necessary styles

const List = ({ category, sort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = category 
          ? `http://localhost:5000/api/products?category=${encodeURIComponent(category)}`
          : 'http://localhost:5000/api/products';
  
        const response = await fetch(url);
        const data = await response.json();
  
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, [category]);
  

  // Filter and sort products based on sort options
  const filteredProducts = products
    .sort((a, b) => {
      if (sort === 'asc') return a.price - b.price;
      if (sort === 'desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="list">
      {filteredProducts.map(item => (
        <Card item={item} key={item._id} className="card" />
      ))}
    </div>
  );
};

export default List;