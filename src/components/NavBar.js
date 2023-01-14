import React, { useState } from 'react'
import Icon from '../assets/Icon.png'
import Bucket from '../assets/Bucket.png'
import Burger from '../assets/Burger.png'
import Exite from '../assets/Exite.png'
import { NavLink } from 'react-router-dom'
import { BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts'
import LoginModal from './modals/loginModal'
import "../Modal.scss"




const NavBar = () => {
  
  
  const [isOpen, setIsOpen] = useState(false);
  
  


  return (
    <div className='nav'>
               
      <div className='nav-top'>
        <NavLink className='button' to={SHOP_ROUTE}><img src={Burger} alt='mainpage'/></NavLink>
        <NavLink className='button' to={SHOP_ROUTE}><img src={Icon} alt='mainpage'/></NavLink>
        <NavLink className='button' to={BASKET_ROUTE}><img src={Bucket} alt='mainpage'/></NavLink>
      </div>
      <div className='nav-top'>
        <NavLink className='button' onClick={() => setIsOpen(true)} ><img src={Exite} alt='mainpage'/></NavLink>
      </div>
      
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </div>
  )
}

export default NavBar
