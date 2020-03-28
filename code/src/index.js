import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// NAV

const navSlide = () => {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav-links')
  const navContainer = document.querySelector('.nav-container')
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
    //Toggle nav
    navContainer.classList.toggle('nav-container-active')
    nav.classList.toggle('nav-active')

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    })

    //Burger animation 
    burger.classList.toggle('toggle')
  })



}

navSlide()
