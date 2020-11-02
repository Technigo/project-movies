import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetail = () => {
	const [companies, setCompanies] = useState();
	const { companyId } = useParams();

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';

	const CompanyURL = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=with_companies=${companyId}`;

	useEffect(() => {
		fetchProductionCompanies();
	}, [CompanyURL, companyId]);

	const fetchProductionCompanies = () => {
		fetch(CompanyURL)
			.then(res => res.json())
			.then(json => {
				setCompanies(json.results);
				console.log(json);
			});
	};

	return (
		<section>
			{companies.name && (
				<div>
					<p>hejhej</p>
					<p>Companyname</p>
				</div>
			)}
		</section>
	);
};
export default CompanyDetail;
