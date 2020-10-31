import React from 'react';

const optionsArray = [
    { option: 'Popular', value: 'popular' },
    { option: 'Latest', value: 'latest' },
    { option: 'Top Rated', value: 'top_rated' },
    { option: 'Now Playing', value: 'now_playing' },
    { option: 'Upcoming', value: 'upcoming'}
];

const handleSubmit = (value) => {
        console.log(value)

    }

const Header = () => {
    return (
        <header>
            <form>
                <select onChange={event => handleSubmit(event.target.value)}>
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