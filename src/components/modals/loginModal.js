import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Dialog } from "@headlessui/react"
import { login } from '../../features/users/userSlice'
import { SHOP_ROUTE } from '../../utils/consts'
import "../../Modal.scss"



const LoginModal = ( { isOpen,  onClose} ) => {
  
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
  
    return (
    
    <Dialog open={isOpen} onClose={onClose}>
        <div className='bg'>
          <Dialog.Panel className='popup'>
            <Dialog.Title>Authentificate</Dialog.Title>
            <input type='text' value={username} onChange={(e) => setUserName(e.target.value)}/>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button 
              onClick={() => {
                dispatch(login({ username, password })) 
                onClose()
                setUserName('')
                setPassword('')
                navigate(SHOP_ROUTE)
              }}
            >
              Login
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
  )
}

export default LoginModal
