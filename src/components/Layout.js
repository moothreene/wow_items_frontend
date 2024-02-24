import React from 'react'
import { useEffect } from 'react';
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {

  useEffect(() => {
    document.title = 'Best in Slot';
  }, []);

  return (
    <main>
        <Navbar />
        <Outlet />
    </main>
  )
}

export default Layout
