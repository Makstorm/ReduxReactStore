import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserCart } from '../features/users/userSlice'
import '../styles/cart.scss'
import ViewBag from '../assets/ViewBag.png'
import CartItem from './CartItem'

const Bag = () => {
    const cart = useSelector(selectUserCart)
    
    return (
    <div className='cart'>
      <div className='cart-text'>
        <h1>Bag</h1>
      </div>
      <div className='cart-list'>
        {cart.map( e => <CartItem key={e.id} device={e}/> )}
      </div>
      <div className='cart-button'>
        <button><img src={ViewBag} alt='bucket' onClick={() => {}}/></button>
      </div>
    </div>
  )
}

export default Bag
