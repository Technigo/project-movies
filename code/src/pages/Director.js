import React from 'react';
import { Link } from 'react-router-dom';
import './director.css';

export const Director = ({ setDirectorName }) => {
	const changeDirector = (directorName) => {
		setDirectorName(directorName);
		localStorage.setItem('directorName', directorName);
	};

	return (
		<div className="directors">
			<Link to="/5655/">
				<button className="anderson" onClick={() => changeDirector('Anderson')}>
					ANDERSON
				</button>
			</Link>
			<Link to="/1032/">
				<button className="scorsese" onClick={() => changeDirector('Scorsese')}>
					SCORSESE
				</button>
			</Link>
			<Link to="/138/">
				<button className="tarantino" onClick={() => changeDirector('Tarantino')}>
					TARANTINO
				</button>
			</Link>
		</div>
	);
};
