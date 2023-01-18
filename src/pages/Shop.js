import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DeviceList from '../components/DeviceList';
import SearchBar from '../components/SearchBar';
import SideFunctionalBar from '../components/SideFunctionalBar';

import { loadDevices } from '../features/devices/deviceSlice';

const Shop = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadDevices())
  },[dispatch])

  

  return (
    <div className='mainPage'>
      <div className='scroll-wraper'>
        <SearchBar />
        <DeviceList />
      </div>  
      <SideFunctionalBar/>
    </div>
  )
}

export default Shop;