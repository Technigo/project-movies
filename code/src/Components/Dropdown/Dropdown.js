import React from 'react'
import "./Dropdown.css"

const Dropdown = ({ select, setSelect }) => {


    const onSelectChange = (event) => {
        setSelect(event.target.value)
    }
    return (
        <form className="form">
            <select name="genre" value={select} onChange={onSelectChange}>
                <option value="popular">Popular</option>
                <option value="upcoming">Upcoming</option>
                <option value="now_playing">Now playing</option>
                <option value="top_rated">Top Rated</option>

            </select>
        </form>
    )
}

export default Dropdown;