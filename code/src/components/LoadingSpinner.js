import React from "react";
import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return (
        <div className="row-spinner-container">
            <div className="row-spinner">
                <div className="spinner">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className="loading-text">Loading</p>
            </div>
        </div>
    )
}

export default LoadingSpinner