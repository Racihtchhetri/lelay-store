import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

export const Categories = () => {
  return (
    <div className='categories'>

        <div className="col">
          <div className="row">
            <img src="	https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <button><Link to = "/product/1" className = "link">Sale</Link></button>
          </div>

          <div className="row">
            <img src="	https://images.pexels.com/photos/6976660/pexels-photo-6976660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <button><Link to = "/product/1" className = "link">Women</Link></button>
          </div>


        </div>
        <div className="col">
          <div className="row">
            <img src="	https://images.pexels.com/photos/11034416/pexels-photo-11034416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <button><Link to = "/product/1" className = "link">New Season</Link></button>
          </div>


        </div>
        <div className="col col-lg">
          <div className="row">
            <div className="col">
              <div className="row">
              <img src="https://images.pexels.com/photos/3260957/pexels-photo-3260957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <button><Link to = "/product/1" className = "link">men</Link></button>
              </div>
            </div>

            <div className="col">
              <div className="row">
              <img src="	https://images.pexels.com/photos/11126679/pexels-photo-11126679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                 <button><Link to = "/product/1" className = "link">Accessories</Link></button>
                 </div>
            </div>
          </div>

          
          <div className="row">
          <img src="	https://images.pexels.com/photos/5878865/pexels-photo-5878865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

          <button><Link to = "/product/1" className = "link">Shoes</Link></button>
          </div>
        </div>
        
      </div>
  
  )
}
