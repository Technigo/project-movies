import React from 'react';
import { NavLink } from 'react-router-dom'
/* import { Link, NavLink } from 'react-router-dom' */

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav-links">
        <NavLink to="/"> <h1> LinNin Inc. </h1> </NavLink>
        {/* <NavLink to="/MovieDetails"> Details </NavLink>
         tror inte den här ska vara här då vi ska länka till
         MovieDetails genom att klicka på bilden */}
      </nav>
    </header>

  );
}