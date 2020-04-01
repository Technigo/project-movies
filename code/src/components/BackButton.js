import React from 'react';
import { Link } from 'react-router-dom';
import { BackArrow } from './BackArrow';
import './backbutton.css';

export const BackButton = ({ path, text }) => {
	return (
		<Link to={path}>
			<button className="home-button" type="button">
				<BackArrow />
				<p className="home-button-text">{text}</p>
			</button>
		</Link>
	);
};
