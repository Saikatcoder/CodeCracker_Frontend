import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

const App = () => {
  let authUser = null
  return (
   <div className='flex flex-col items-center justify-start'>
    <Routes>
      <Route>
        <Route path='/' element={authUser ? <HomePage/> : <Navigate to = {"/login"}/>}/>
        <Route path='/login' element={!authUser ? <LoginPage/> : <Navigate to={"/"}/>}/>
        <Route path='/signup' element={!authUser ? <SignupPage/> : <Navigate to={"/"}/>}/>
      </Route>
    </Routes>
   </div>
  )
}

export default App