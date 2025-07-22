import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import UserLogin from './Pages/Auth/User/UserLogin'
import Start from './Pages/Start'
import UserSignUp from './Pages/Auth/User/UserSignUp'
import CaptionSignUp from './Pages/Auth/Caption/CaptionSignUp'
import CaptionLogin from './Pages/Auth/Caption/CaptionLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        //public routes
        <Route path='/' element={<Start />} />
        <Route path='/user-login' element={<UserLogin />} />
        <Route path='/user-signup' element={<UserSignUp />} />
        <Route path='/caption-login' element={<CaptionLogin />} />
        <Route path='/caption-signup' element={<CaptionSignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App