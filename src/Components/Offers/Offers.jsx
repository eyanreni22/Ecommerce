import React from 'react';
import './Offers.css';
import new_col from  "../Assets/new_col.png";

 const Offers = () => {
  return (
    <div className='offers'>
    <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on Best sellers Products</p>
        <button>Check Now</button>

    </div>
    <div className="offers-right">
     <img src={new_col} width={100} alt="" />
    </div>
    </div>
  )
}

export default Offers;