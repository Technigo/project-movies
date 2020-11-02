import React from 'react';
import { useParams } from 'react-router-dom';

export const MovieInfo = () => {
	const { id } = useParams();

	return <p>Test</p>;
};
