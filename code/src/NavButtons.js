import React from "react"
import "./navbuttons.css"
import { ReactComponent as BackSvg } from "./back.svg"
import { ReactComponent as NextSvg } from "./next.svg"

export const NavButtons = (props) => {
    const { pageNumber, setPageNumber } = props
    const handleNext = () => {
        setPageNumber(pageNumber + 1)
    }

    const handleBack = () => {
        setPageNumber(pageNumber - 1)
    }

    return (
        <article className="buttons">
            {pageNumber != 1 &&
                <button className="nav-button" onClick={handleBack}><BackSvg className="icon" />Back</button>}
            <button className="nav-button" onClick={handleNext}>Next<NextSvg className="icon" /></button>
        </article>
    )

}