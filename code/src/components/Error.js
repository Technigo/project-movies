import React from 'react';

import BackButton from './BackButton';

const Error = () => {
	return (
		<>
			<section>
				<p>Something went wrong, please try again later</p>
				<BackButton path={'/'} text={'Give it another go!'} />
			</section>
		</>
	);
};
export default Error;
