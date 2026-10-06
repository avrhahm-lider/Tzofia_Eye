import React from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router'


export default function ProtectRouter() {
    const navigate = useNavigate()
    if (!localStorage.getItem("token"))
       return navigate("/login")
  return (
    <Outlet/>
  )
}
