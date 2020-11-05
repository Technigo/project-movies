import React from 'react';
import { Link } from 'react-router-dom';

//import BackButton from './BackButton';

const Error = () => {
	return (
		<>
			<section>
				<p>Something went wrong, please try again later</p>
				{/* <BackButton path={'/'} text={'Give it another go!'} /> */}
				<Link to="/" className="error-button">
					Give it another go!
				</Link>
			</section>
		</>
	);
};
export default Error;
