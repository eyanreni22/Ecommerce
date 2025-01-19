import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo2 from "../Assets/logo2.jpeg";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';




 const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  return (
  <header>
     <div className="navbar">
     
    
     <div className="nav-logo">
    <img src={logo2} alt="logo" width={120} height={100} />
    <p>Shopsee</p>
    </div>
   <ul className='nav-menu'>
      <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link  style={{textDecoration:'none'}} to="/mens">Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to="/womens">Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
  
    </ul>
    <div className='nav-login-cart'>
    <Link to="/login"><button>Login</button></Link>
    <Link to="/cart"><img src={cart_icon} alt="cart"  width={52}/></Link>
      <div className="nav-cart-count">0</div>
    </div>
    </div>
  </header>
   
    
   
  

    
  )
}
 
export default Navbar;
