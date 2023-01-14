import React from 'react'

const CartItem = ({device}) => {
  return (
    <div className='cart-item'>
      <img src={device.image}/>
    </div>
  )
}

export default CartItem
