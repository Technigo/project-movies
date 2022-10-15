import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ value, setSelection }) => {
	let navigate = useNavigate();

	return (
		<header>
			<h1>A Film A Day</h1>
			<nav>
				<select
					value={value}
					onChange={(e) => {
						setSelection(e.target.value);
						navigate('/');
					}}
				>
					<option value="now_playing">Now Playing</option>
					<option value="upcoming">Upcoming</option>
					<option value="popular">Popular</option>
					<option value="top_rated">Top Rated</option>
				</select>
			</nav>
		</header>
	);
};

export default NavBar;
