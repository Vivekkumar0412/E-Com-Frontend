import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <>
    {/* Header component */}
    <Header/>
    {/* main content */}
    <main>
      <Outlet/>
    </main>
    {/* foooter */}
    <Footer/>
    </>
  )
}

export default UserLayout