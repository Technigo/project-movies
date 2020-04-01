import React from 'react';
import { Link } from 'react-router-dom';
import './director.css';

export const Director = ({ setDirector, setDirectorName }) => {
	const anderson = 5655;
	const scorsese = 1032;
	const tarantino = 138;

	const changeDirector = (director, directorName) => {
		localStorage.setItem('director', director);
		setDirector(director);
		setDirectorName(directorName);
	};

	return (
		<div className="directors">
			<Link to="/5655">
				<button className="anderson" onClick={() => changeDirector(anderson, 'Anderson')}>
					ANDERSON
				</button>
			</Link>
			<Link to="/1032">
				<button className="scorsese" onClick={() => changeDirector(scorsese, 'Scorsese')}>
					SCORSESE
				</button>
			</Link>
			<Link to="/138">
				<button className="tarantino" onClick={() => changeDirector(tarantino, 'Tarantino')}>
					TARANTINO
				</button>
			</Link>
		</div>
	);
};
