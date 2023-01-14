import React from 'react'
import { useLocation } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import Bag from './Bag'
import TotalCheck from './TotalCheck'

const SideFunctionalBar = () => {
  
    const location = useLocation()
    const isBasket = location.pathname === SHOP_ROUTE
    
    return (
    <div>
      {isBasket ? <Bag/> : <TotalCheck/>}
    </div>
  )
}

export default SideFunctionalBar
