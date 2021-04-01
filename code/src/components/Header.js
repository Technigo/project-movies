import React from 'react'
import { Route } from 'react-router-dom'

import BackButton from './BackButton'

const Header = () => {
    return (
        <header>
            <Route path="/" exact> 
                <div>selector</div>
            </Route>
            <Route path="/movies">
                <div>
                   <BackButton /> 
                </div>
            </Route>
        </header>
    )
}

export default Header