import { useState } from 'react'
import './App.css'
import MainPage from './pages/mainPage/MainPage'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage/LoginPage'
import ProtectRouter from './ProtectRouter'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route element={<ProtectRouter/>}>
      <Route element={<MainPage/>} path='/'/>
      </Route>
    </Routes>
  )
}

export default App
