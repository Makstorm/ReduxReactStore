import React from 'react'
import DeviceList from '../components/DeviceList';
import FilterBar from '../components/FilterBar';
import PropertiesBar from '../components/PropertiesBar';

const Shop = () => {
  return (
    <div className='mainPage'>
      <PropertiesBar />
      <FilterBar />
      <DeviceList />
    </div>
  )
}

export default Shop;