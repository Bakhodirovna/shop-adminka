import React from 'react';
import styles from './navbar.scss';
import {NavLink} from 'react-router-dom'
import  logo  from "./navbarLogo/logo.png";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__box">
            <NavLink className='navbar__logo' to='/'>
                <img  src={logo} alt="logo" />
                <span className='navbar__logo__span'></span>
            </NavLink>
            <ul className='navbar__links'>
              <NavLink className='navbar__link' to='/tovar' >Tovar qo`shish</NavLink>
              <NavLink className='navbar__link' to='/banner' >Bannerlar</NavLink>
              <NavLink className='navbar__link' to='/additional' >Qo`shimchalar</NavLink>
              <NavLink className='navbar__link' to='/category' >Kategoriya</NavLink>
              <NavLink className='navbar__link' to='/brends' >Hamkor brendlar</NavLink>
              <NavLink className='navbar__link' to='/adress' >Manzil</NavLink>
              <NavLink className='navbar__link' to='/orders' >Buyurtmalar</NavLink>
              <NavLink className='navbar__link' to='/' >Chiqish</NavLink>
            </ul>
            </div>
        </div>
    );
}

export default Navbar;
