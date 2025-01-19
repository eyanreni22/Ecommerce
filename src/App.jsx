import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import { Footer } from './Components/footer/Footer';
import  banner_mens  from "./Components/Assets/banner_mens.jpg"
import  banner_womens  from "./Components/Assets/banner_womens.jpg"
import  banner_kids  from "./Components/Assets/banner_kids.jpeg"



function App() {
 
  return (
  <div>
      <BrowserRouter>
       <Navbar/>
     <Routes>
      
       <Route path='/' element={<Shop/>}/>
       <Route path='/mens' element={<ShopCategory banner={banner_mens} Category="men"/>}/>
       <Route path='/womens' element={<ShopCategory  banner={banner_womens} Category="women"/>}/>
       <Route path='/kids' element={<ShopCategory   banner={banner_kids} Category="Kid"/>}/>
       <Route/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/loginsignup' element={<LoginSignup/>}/>
     
       </Routes>
       <Footer/>
     
 </BrowserRouter>
       
      </div>
      
    
  );
}

export default App;
