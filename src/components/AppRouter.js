import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
  return (
    <div className='wraper'>
      <Routes>
          {publicRoutes.map(({path, Component}) => 
              <Route key={path} path={path} element={<Component/>} exact/>
          )}
          <Route path='*' element={<Navigate to={SHOP_ROUTE} />}/>
      </Routes>
    </div>
  )
}

export default AppRouter
