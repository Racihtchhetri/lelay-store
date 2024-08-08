import React, { useState } from 'react';
import './Slider.scss';
import { WestOutlined } from '@mui/icons-material';
import { EastOutlined } from '@mui/icons-material';

export const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1513",
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1513",
        "https://images.pexels.com/photos/3757028/pexels-photo-3757028.jpeg?auto=compress&cs=tinysrgb&w=1513"
    ]

const prevSlide = ()=>{
  setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
};

const nextSlide = ()=>{
  setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
}


  return (
    <div className='slider'>
        <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
       <img src={data[0]} alt="" />
       <img src={data[1]} alt="" />
       <img src={data[2]} alt="" />
       </div>
       <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlined/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlined/>
        </div>
       </div>
    </div>
  )
}
export default Slider;
