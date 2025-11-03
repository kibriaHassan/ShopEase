import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layouts/Navbar/Navbar'
import Home from './pages/Home/Home'
import Product_Card from './components/Product_Card'
import Breadcrumb from './components/Breadcrumb'

function App() {
  

  return (
    <>
   
     {/* <Home/> */}
     <Product_Card/>
     <Breadcrumb/>
    </>
  )
}

export default App
