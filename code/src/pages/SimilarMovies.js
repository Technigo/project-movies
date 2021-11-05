import React, { useEffect, useState } from "react"; //import React
import { useParams, useHistory } from "react-router-dom"; //import Param
import styled from "styled-components"; //import Styled component
import { Link } from "react-router-dom"; //import link

import { SIMILAR_URL } from "./utils/Url";

const Image = styled.img`
	padding: 0;
	margin: 0;
	width: 100%;
	height: auto;
`;

const SimilarTitle = styled.h3`
	display: flex;
	margin: 20px auto;
	justify-content: center;
`;

const MovieContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	width: 100%;
	justify-content: space-between;
`;

const HomePageBtn = styled.button`
	border-radius: 20px;
	padding: 10px;
`;

export const SimilarMovies = () => {
	const { movieId } = useParams(); // a variable for param (hook)
	const [similarMovies, setSimilarMovies] = useState([]); // a state property that collects all the similar movie details

	const history = useHistory();

	const onHomePageRedirect = () => {
		history.push("/");
	};

	useEffect(() => {
		fetch(SIMILAR_URL(movieId))
			.then((res) => res.json())
			.then((data) => {
				setSimilarMovies(data.results);
			});
	}, [movieId]);

	return (
		<section>
			<SimilarTitle> Similar Movies </SimilarTitle>

			<MovieContainer>
				{similarMovies.map((similar) => (
					<div key={similar.id}>
						<Link to={`/movie/${similar.id}`}>
							<Image
								src={`https://image.tmdb.org/t/p/w500/${similar.poster_path}`}
								alt={similar.title}
							/>
						</Link>
					</div>
				))}
			</MovieContainer>
		</section>
	);
};
