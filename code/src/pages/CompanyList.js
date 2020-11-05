import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CompanyHeader from '../components/CompanyHeader';
import BackButton from '../components/BackButton';
import Loader from '../components/Loader';
import MovieThumb from 'components/MovieThumb';

import '../styles/CompanyList.css';

const CompanyList = () => {
	const [companyMovies, setCompanyMovies] = useState([]);
	const [companies, setCompanies] = useState([]);
	const [loading, setLoading] = useState(true);
	const { companyId } = useParams();

	const API_KEY = '175ffd5710eba9b52b1d7f46de42a152';
	const COMPANY_URL = `https://api.themoviedb.org/3/company/${companyId}?api_key=${API_KEY}`;
	const MOVIE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`;

	useEffect(() => {
		fetch(COMPANY_URL)
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('404');
				}
			})
			.then(json => {
				console.log(json);
				setCompanies(json);
				setLoading(false);
			})
			.catch(() => {
				window.location.assign('/error');
			});
	}, [COMPANY_URL]);

	useEffect(() => {
		fetch(MOVIE_URL)
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
				console.log(filteredCompanyArray);
				setCompanyMovies(filteredCompanyArray);
				setLoading(false);
			})
			.catch(() => {
				window.location.assign('/error');
			});
	}, [MOVIE_URL]);

	return (
		<>
			{loading && <Loader />}
			{!loading && (
				<>
					<CompanyHeader {...companies} />
					<main className="list">
						<BackButton text={'Go back to movie'} />
						{companyMovies.map(company => (
							<MovieThumb key={company.id} {...company} />
						))}
					</main>
				</>
			)}
		</>
	);
};
export default CompanyList;
