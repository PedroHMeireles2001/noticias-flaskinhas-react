import React from 'react'
import Header from '../../Components/Header'
import { Outlet } from 'react-router-dom'

export default function Base() {
  return (
    <main>
      <Header/>
      <Outlet/>
    </main>
  )
}
