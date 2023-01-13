import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './NavBar'
import { publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts';
import SideFunctionalBar from './SideFunctionalBar';

const AppRouter = () => {
  return (
    <div className='wraper'>
      <NavBar />
      <Routes>
          {publicRoutes.map(({path, Component}) => 
              <Route key={path} path={path} element={<Component/>} exact/>
          )}
          <Route path='*' element={<Navigate to={SHOP_ROUTE} />}/>
      </Routes>
      <SideFunctionalBar/>
    </div>
  )
}

export default AppRouter
