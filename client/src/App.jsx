import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignOut'
import Profile from './pages/Profile'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    < Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
