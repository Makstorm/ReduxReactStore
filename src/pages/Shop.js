import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeviceList from '../components/DeviceList';
import AddItemModal from '../components/modals/AddItemModal';
import SearchBar from '../components/SearchBar';
import SideFunctionalBar from '../components/SideFunctionalBar';

import { loadDevices } from '../features/devices/deviceSlice';
import { selectIsOpen, setIsOpenFalse } from '../features/modals/modalsSlice';

const Shop = () => {


  const isOpen = useSelector(selectIsOpen)


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
      <AddItemModal isOpen={isOpen} onClose={ () => dispatch(setIsOpenFalse()) }/>
    </div>
  )
}

export default Shop;