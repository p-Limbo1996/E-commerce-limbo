import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContex'
import dropDown_icon from '../assets/dropdown.png';
const Navbar = () => {

    const[menu,setMenu]=useState('shop');
    const {getTotoalCartItems}=useContext(ShopContext);
    const menuRef =useRef();
    const dropdown_toggle =(e)=>{  
      menuRef.current.classList.toggle('nav-menu-visible');
      menuRef.current.classList.toggle('top');
      e.target.classList.toggle('open')
      
    } 

  return (

    <div className='navbar'>

        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu('shop')}}><Link to="/" style={{textDecoration:"none" ,color:"#626262"}}>Shop</Link> {menu==='shop'?<hr />:<></>} </li>
            <li onClick={()=>{setMenu('men')}}><Link to="/mens" style={{textDecoration:"none" ,color:"#626262"}}>Men</Link> {menu==='men'?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('women')}}><Link to="/womens" style={{textDecoration:"none" ,color:"#626262"}}>Women</Link> {menu==='women'?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link to="/kids" style={{textDecoration:"none" ,color:"#626262"}}>Kids</Link> {menu==='kids'?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-right"  >

                <div className="nav-login-card">
                  <Link to="/login" ><button>Login</button></Link>
                  <Link to="/cart" ><img src={cart_icon} alt="" /></Link>
                  <div className="nav-card-count">{getTotoalCartItems()}</div>
                </div>
                  <img className='dropdown' onClick={dropdown_toggle} src={dropDown_icon} alt="" />
        </div>

    </div>

  )
}

export default Navbar