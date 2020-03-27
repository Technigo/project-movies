import React from "react"
import "./changeapi.css"

export const ChangeApi = (props) => {
    const { setApi, setPageNumber } = props
    const handleEvent = (event) => {
        setPageNumber(1)
        setApi(event.target.value)
    }

    return (
        <div className="drop-down-container">
            <select className="drop-down" onChange={handleEvent}>
                <option value='popular'>Popular</option>
                <option value="top_rated">Top Rated</option>
                <option value="upcoming">Coming Soon </option>
            </select >
        </div>
    )
}