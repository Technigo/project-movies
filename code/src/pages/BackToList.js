import React from 'react'

import { Link } from 'react-router-dom';

export const BackToList = () => {
    return(
    <Link to="/">
      <div className="back-link">
         <i class="fas fa-chevron-circle-left"></i>
     </div>

    </Link>
    )
}