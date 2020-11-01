import React from 'react';

import { API_KEY } from '../urls';

const optionsArray = [
    { option: 'Popular', value: 'popular' },
    { option: 'Top Rated', value: 'top_rated' },
    { option: 'Now Playing', value: 'now_playing' },
    { option: 'Upcoming', value: 'upcoming'}
];

const Header = ({ reachAPIValue }) => {

    const onOptionChange = (value) => {
        const pickedAPI = `https://api.themoviedb.org/3/movie/${value}?api_key=${API_KEY}&language=en-US`;
        reachAPIValue(pickedAPI);
    }

    return (
        <header>
            <form>
                <select onChange={event => onOptionChange(event.target.value)}>
                    {optionsArray.map((option) => {
                    return (
                        <option key={option.option} value={option.value}>
                            {option.option}
                        </option>
                        )
                    })}
                </select>
            </form>
        </header>
    )
}

export default Header;