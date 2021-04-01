import React from 'react'
import { Route } from 'react-router-dom'

import BackButton from './BackButton'
import Selector from './Selector'

const Header = ({ movieListType, setMovieListType }) => {
    return (
        <header className="header">
            <Route path="/" exact> 
                <Selector
                    movieListType={movieListType}
                    setMovieListType={setMovieListType}
                />
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