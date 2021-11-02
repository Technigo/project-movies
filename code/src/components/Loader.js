import React from 'react'

const Loader = () => {
    return (
        <div className="loader-overlay">
            <div className="loader-animation">
                <img src="/reel.svg" className="loader-reel" alt="loader reel"/>
            </div>
        </div>
    )
}

export default Loader