import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '../assets/Button.png'
import { setIsOpenTrue } from '../features/modals/modalsSlice'
import { addPreCartItem } from '../features/users/userSlice'

const DeviceItem = ({device}) => {
  
  const dispatch = useDispatch()

  return (
    <div className='deviceItem'>
      <div className='image'>
        <img src={device.image} alt='пук'></img>
      </div>
      <div className='content'>
        <h1>{device.title}</h1>
        <h3>{device.category}</h3>
        <div className='price'>
          <h1>$ {device.price}</h1>
          <button><img src={Button} alt='bucket' onClick={() => {
            
            dispatch(addPreCartItem(device))
            dispatch(setIsOpenTrue())
          }}/></button>
        </div>
      </div>
    </div>
  )
}

export default DeviceItem
