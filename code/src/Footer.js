import React from "react"
import "./footer.css"


export const Footer = ({ viewCount }) => {
    return (
        <p className="footer">Films I've seen: {viewCount}</p>
    )
}