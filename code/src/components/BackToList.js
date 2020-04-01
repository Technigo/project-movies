import React, { useState, useEffect } from 'react'
import './backtolist.css'
import { Link } from 'react-router-dom'

export const BackToList = () => {

  return (
   <Link to="/">
   <div className="back-to-list">
      <i class="fas fa-chevron-circle-left"></i>
      <h2>Movies</h2>
    </div>
    </Link>
  )
}