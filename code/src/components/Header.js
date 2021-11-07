import React from 'react'
import LoadingIcon from './LoadingIcon'

const Header = () => {

    return (
        <header class='header'>
            <div className='site-name'>
                <LoadingIcon />
                <h1>Filmtime</h1>
            </div>
        </header>
    )
}


export default Header
