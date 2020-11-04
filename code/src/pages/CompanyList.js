import MovieThumb from 'components/MovieThumb';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
//import Error from '../components/Error';
import BackButton from '../components/BackButton';

import '../styles/MovieList.css';

const CompanyList = () => {
	const [companies, setCompanies] = useState();
	const [loading, setLoading] = useState(true);
	const { companyId, movieId } = useParams();

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`;

	useEffect(() => {
		fetchProductionCompanies();
	}, [companyId]);

	const fetchProductionCompanies = () => {
		fetch(API_URL)
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('404');
				}
			})
			.then(json => {
				const filteredCompanyArray = json.results.filter(
					movie => movie.poster_path != null
				);
				//console.log(filteredCompanyArray);
				setCompanies(filteredCompanyArray);
				setLoading(false);
			})
			.catch(() => {
				window.location.assign('/error');
			});
	};

	return (
		<main className="movie-list">
			{/* <BackButton path={`/movies/${movieId}/`} text={'Go back to movie'} /> */}
			<BackButton text={'Go back to movie'} />
			{loading && <Loader />}
			{!loading && (
				<>
					{companies.map(company => (
						<MovieThumb key={company.id} {...company} />
					))}
				</>
			)}
		</main>
	);
};
export default CompanyList;
