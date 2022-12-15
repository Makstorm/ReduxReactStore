import React from 'react'
import Icon from '../assets/Icon.png'
import Bucket from '../assets/Bucket.png'
import Burger from '../assets/Burger.png'
import Exite from '../assets/Exite.png'
import { NavLink, useNavigate} from 'react-router-dom'
import { BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts'



const NavBar = () => {
  const navigate = useNavigate()

  return (
    <div className='nav'>
      
      
      
      <div className='nav-top'>
        <NavLink className='button' to={SHOP_ROUTE}><img src={Burger} alt='mainpage'/></NavLink>
        <NavLink className='button' to={SHOP_ROUTE}><img src={Icon} alt='mainpage'/></NavLink>
        <NavLink className='button' to={BASKET_ROUTE}><img src={Bucket} alt='mainpage'/></NavLink>
      </div>
      <div className='nav-top'>
        <NavLink className='button' to={SHOP_ROUTE}><img src={Exite} alt='mainpage'/></NavLink>
      </div>
    </div>
  )
}

export default NavBar
