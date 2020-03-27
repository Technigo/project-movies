import React from "react"
import { NavButtons } from './NavButtons'
import { ChangeApi } from './ChangeApi'
import { Route } from "react-router-dom"
import "./navbar.css"

export const NavBar = (props) => {
    const { api, setApi, pageNumber, setPageNumber, viewCount } = props
    return (
        <article className="nav-bar">
            <h1 className="headline">Film Database</h1>
            <h2 className="view-count">Films I've seen: {viewCount}</h2>
            <div className="nav-wrapper">
                <Route path="/" exact >
                    <NavButtons pageNumber={pageNumber} setPageNumber={setPageNumber} />
                    <ChangeApi setApi={setApi} setPageNumber={setApi} />
                </Route>
            </div>
        </article >
    )
}