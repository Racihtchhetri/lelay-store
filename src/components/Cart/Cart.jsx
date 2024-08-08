import React from 'react';
import './Cart.scss';
import { DeleteForeverOutlined } from '@mui/icons-material';

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/18359747/pexels-photo-18359747.jpeg",
            img2: "https://images.pexels.com/photos/20797542/pexels-photo-20797542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long Sleeve Graphic T-shirt",
            desc: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 699,
            price: 599
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/18132075/pexels-photo-18132075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/18312796/pexels-photo-18312796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Linen-blend frill-trimmed blouse",
            desc: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 959,
            price: 799
        }
    ];

  return (
    <div className='cart'>
        <h1>Product in your cart</h1>
        {data.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />

                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc.substring(0, 100)}</p>
                    <div className="price">
                        1 x ₹{item.price}
                    </div>
                </div>

                <DeleteForeverOutlined className='delete' />

            </div>
        ))}
        <div className="total">
            <span>Subtotal</span>
            <span>₹1398</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
