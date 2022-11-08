import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import { BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { SlBasket, SlLogin } from 'react-icons/sl';
import { TfiSearch } from 'react-icons/tfi'

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <div className='nav'>
      <NavLink className='navl-items' to={SHOP_ROUTE}>MainPage</NavLink>
      
      <div className='navc-items'>
        <TfiSearch className='Icons'/>
        <input className='finder' type='text' placeholder='Поиск'></input>
      </div>
      
      <div className='navr-items'>
        <SlBasket className='Icons' onClick={() => navigate(BASKET_ROUTE)}/>
        <SlLogin className='Icons' onClick={() => navigate(SHOP_ROUTE)}/>
      </div>
    </div>
  )
}

export default NavBar
