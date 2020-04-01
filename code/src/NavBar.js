import React from "react"
import { NavButtons } from './NavButtons'
import { ChangeApi } from './ChangeApi'
import { Route, Link } from "react-router-dom"
import "./navbar.css"

export const NavBar = (props) => {
    const { setApi, pageNumber, setPageNumber } = props
    return (
        <article className="nav-bar">
            <Link className="home-button" to="/"><h1 className="headline">Film Database</h1></Link>
            <div className="nav-wrapper">
                <Route path="/" exact >
                    <NavButtons pageNumber={pageNumber} setPageNumber={setPageNumber} />
                    <ChangeApi setApi={setApi} setPageNumber={setPageNumber} />
                </Route>
                <Route path="/films/:title/recommended" exact >
                    <NavButtons pageNumber={pageNumber} setPageNumber={setPageNumber} />
                </Route>
            </div>
        </article >
    )
}