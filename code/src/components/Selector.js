import React from 'react'

const Selector = ({ movieListType, setMovieListType }) => {
    const onMovieListTypeChange = (event) => {
        setMovieListType(event.target.value)
    }
    return (
        <div className="drop-down-container">
            <select className="drop-down" value={movieListType} onChange={onMovieListTypeChange}>
                <option value="upcoming">Upcoming</option>
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
            </select>
        </div>
    )
}
export default Selector