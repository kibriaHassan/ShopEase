import React from 'react'
import Navbar from '../layouts/Navbar/Navbar'
import Footer from '../layouts/Footer/Footer'
import { Outlet } from 'react-router'

const Routes = () => {
  return (
    <>
    <Navbar/>

    <main className='flex flex-col min-h-screen'>
    <Outlet/>
    </main>
    <Footer/>
    
    
    
    </>
  )
}

export default Routes
