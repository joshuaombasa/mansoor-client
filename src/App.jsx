import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Equipment from './pages/equipment/Equipment'
import VendorLayout from './components/VendorLayout'
import VendorEquipment from './pages/vendor/VendorEquipment'
import EquipmentDetails from './pages/equipment/EquipmentDetails'
import Login from './pages/Login'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='equipment' element={<Equipment />} />
      <Route path='equipment/:id' element={<EquipmentDetails />} />
      <Route path='vendor' element={<VendorLayout />}>
        <Route path='equipment' element={<VendorEquipment />} />
      </Route>
      <Route path='login' element={<Login />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
