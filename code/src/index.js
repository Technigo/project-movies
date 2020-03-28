import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// NAV

const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
  })
}

navSlide()
