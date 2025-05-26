import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignupPage'
import {Toaster} from "react-hot-toast"
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import { Loader } from 'lucide-react'
const App = () => {
  // const {authUser, checkAuth, isCheckingAuth} = useAuthStore
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore()
  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  if(isCheckingAuth && !authUser){
    return(
      <div className='flex justify-center items-center h-screen'>
        <Loader className='size-10 animate-spin'/>
      </div>
    )
  }
  return (
   <div className='flex flex-col items-center justify-start'>
    <Toaster/>
    <Routes>

      <Route path='/' element={<Layout/>}>
          <Route index element={authUser ? <HomePage/> : <Navigate to = {"/login"}/>}/>
      </Route>
      
      <Route>
        <Route path='/login' element={!authUser ? <LoginPage/> : <Navigate to={"/"}/>}/>
        <Route path='/signup' element={!authUser ? <SignUpPage/> : <Navigate to={"/"}/>}/>
      </Route>
    </Routes>
   </div>
  )
}

export default App