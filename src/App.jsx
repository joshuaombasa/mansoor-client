import { useState } from 'react'

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
import VendorEquipmentDetails from './pages/vendor/VendorEquipmentDetails'
import Details from './components/Details'
import Photos from './components/Photos'
import Pricing from './components/Pricing'
import Reviews from './pages/vendor/Reviews'
import Dashboard from './pages/vendor/Dashboard'
import Income from './pages/vendor/Income'
import AuthRequired from './components/AuthRequired'
import Error from './components/Error'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='equipment' element={<Equipment />} />
      <Route path='equipment/:id' element={<EquipmentDetails />} />
      <Route element={<AuthRequired />}>
        <Route path='vendor' element={<VendorLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='equipment' element={<VendorEquipment />} />
          <Route path='equipment/:id' element={<VendorEquipmentDetails />}>
            <Route index element={<Details />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='photos' element={<Photos />} />
            <Route />
          </Route>
          <Route path='reviews' element={<Reviews />} />
          <Route path='income' element={<Income />} />
        </Route>
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
