import React from 'react'
import { useSelector } from 'react-redux'
import { selectPreCartItem } from '../../features/users/userSlice'
import s from '../../styles/addItemModal.module.scss'

const AddItemModal = ({isOpen, onClose}) => {
  
  const preCart = useSelector(selectPreCartItem)
  
  return (
    
    <div className={`${s.overlay} ${isOpen ? s.overlayOut : ""}`}>
      <div className={s.drawer}>
        <button onClick={() => onClose()}>Закрить</button>
        <h3>{preCart.title}</h3>
      </div>
    </div>
       
  )
}

export default AddItemModal
