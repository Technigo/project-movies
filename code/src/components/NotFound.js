import React from 'react'
import { Header } from './Header'

export const NotFound = () => {
  return (
    <div style={{ backgroundColor: 'black', height: '100vh' }}>
      <Header />
      <h1 style={{ color: 'white',
        paddingTop: '100px',
        paddingLeft: '5%',
        marginTop: '0' }}>Oops! This page does not seem to exist!
      </h1>
    </div>)
}