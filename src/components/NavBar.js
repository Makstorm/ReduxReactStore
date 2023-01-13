import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Icon from '../assets/Icon.png'
import Bucket from '../assets/Bucket.png'
import Burger from '../assets/Burger.png'
import Exite from '../assets/Exite.png'
import { NavLink, useNavigate} from 'react-router-dom'
import { BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Dialog } from "@headlessui/react"
import "../Modal.scss"
import { login } from '../features/users/userSlice'



const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const [isOpen, setIsOpen] = useState(false);
  
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');


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
      
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className='bg'>
          <Dialog.Panel className='popup'>
            <Dialog.Title>Authentificate</Dialog.Title>
            <input type='text' value={username} onChange={(e) => setUserName(e.target.value)}/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button 
              onClick={() => {
                dispatch(login({ username, password })) 
                setIsOpen(false)
                navigate(SHOP_ROUTE)
              }}
            >
              Login
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}

export default NavBar
