import React, { useState } from 'react'
import Bag from './Bag'
import TotalCheck from './TotalCheck'

const SideFunctionalBar = () => {
  
    const [state, setState] = useState(true)
  
    return (
    <div>
      {state ? <Bag/> : <TotalCheck/>}
    </div>
  )
}

export default SideFunctionalBar
