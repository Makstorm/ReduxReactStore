import React from 'react'
import { useSelector } from 'react-redux'
import DeviceItem from './DeviceItem'
import { selectDevices } from '../features/devices/deviceSlice'

const DeviceList = () => {
  
  const devices = useSelector(selectDevices)
  

  return (
    <div className='deviceList'>
      {devices.map((item) => <DeviceItem key={item.id} device={item}/>)}
    </div>
  )
}

export default DeviceList
