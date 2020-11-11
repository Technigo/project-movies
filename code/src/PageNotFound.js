import React from 'react';

import { Button } from './components/Button';

import './pages/pagenotfound.css';

export const PageNotFound = () => {
	return (
		<div className="page-not-found">
			<section className="page-not-found__error">
				<h1>Something went wrong...</h1>
				<h2>Go back to the movies page and pick another movie.</h2>

				<Button />
			</section>
		</div>
	);
};
