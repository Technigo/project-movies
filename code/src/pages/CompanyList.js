import MovieThumb from 'components/MovieThumb';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CompanyList = () => {
	const [companies, setCompanies] = useState();
	const { companyId } = useParams();

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';

	//const CompanyURL = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=with_companies=${companyId}`;
	//const CompanyURL =
	//'https://api.themoviedb.org/3/discover/movie?api_key=175ffd5710eba9b52b1d7f46de42a152&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=11395';

	useEffect(() => {
		fetchProductionCompanies(companyId);
	}, [companyId]);

	const fetchProductionCompanies = companyId => {
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`
		)
			.then(res => res.json())
			.then(json => {
				setCompanies(json.results);
				console.log(json);
			});
	};

	return (
		<main>
			{companies && (
				<section className="movie-container">
					{companies.map(company => (
						<MovieThumb key={company.id} {...company} />
					))}
				</section>
			)}
		</main>
	);
};
export default CompanyList;
