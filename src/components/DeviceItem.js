import React from 'react'
import Button from '../assets/Button.png'

const DeviceItem = ({device}) => {
  
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
          <button><img src={Button} alt='bucket'/></button>
        </div>
      </div>
    </div>
  )
}

export default DeviceItem
