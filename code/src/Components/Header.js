import React from 'react';

const optionsArray = [
    'Popular',
    'Latest',
    'Top Rated',
    'Now Playing',
    'Upcoming'
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
                        <option key={option} value={option}>
                            {option}
                        </option>
                        )
                    })}
                </select>
            </form>
        </header>
    )
}

export default Header;