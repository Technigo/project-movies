import React from 'react'

import { Nav } from '../components/Nav'

import '../styles/notfound.css'

export const NotFound = () => {
  return (
    <main className='main__grid'>
      <Nav/>
    <section>
      <h2>Oops!</h2>
      <p>That movie doesn't exist in our library</p>
    </section>
    </main>
  )
}
