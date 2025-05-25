import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

const App = () => {
  return (
   <div className='flex flex-col items-center justify-start'>
    <Routes>
      <Route>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Route>
    </Routes>
   </div>
  )
}

export default App