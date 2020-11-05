import React from 'react';
//import { Link } from 'react-router-dom';

const CompanyHeader = ({ homepage, logo_path, name }) => {
	return (
		<header>
			{homepage ? (
				<a href={homepage} target="blank" className="company">
					{logo_path ? (
						<img
							className="company__logo"
							src={`https://image.tmdb.org/t/p/w185/${logo_path}`}
							alt={name}
						/>
					) : (
						<h2>{name}</h2>
					)}
				</a>
			) : (
				<>
					{logo_path ? (
						<img
							className="company__logo"
							src={`https://image.tmdb.org/t/p/w45/${logo_path}`}
							alt={name}
						/>
					) : (
						<h2>{name}</h2>
					)}
				</>
			)}
		</header>
	);
};

export default CompanyHeader;
