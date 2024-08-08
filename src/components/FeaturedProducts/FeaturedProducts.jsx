import React, { useState, useEffect } from 'react';
import './FeaturedProduct.scss';
import Card from '../Card/Card';

export const FeaturedProducts = ({ type }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products?type=${type}`)
            .then(response => response.json())
            .then(data => {
                setData(data.slice(0, 4)); // Ensure only 4 products are set in state
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [type]); // Re-fetch data when type changes

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis consectetur quos libero itaque minus illo eaque, possimus placeat qui mollitia amet, enim dolorum iusto perspiciatis. Laborum quisquam ex quis?</p>
            </div>

            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
        </div>
    );
}
