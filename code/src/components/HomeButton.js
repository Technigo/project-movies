import React from 'react';
import { Link } from 'react-router-dom';
import { BackArrow } from './BackArrow';
import './homebutton.css';

export const HomeButton = () => {
	return (
		<Link to="/">
			<button className="home-button" type="button">
				<BackArrow />
				<p className="home-button-text">Movies</p>
			</button>
		</Link>
	);
};
