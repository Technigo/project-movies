import React, { useEffect, useState } from "react"; //import React
import { useParams, useHistory } from "react-router-dom"; //import Param
import styled from "styled-components";
import { SimilarMovies } from "./SimilarMovies";
import { Loading } from "./Loading";

import { URL_DETAILS } from "./Url";

const GoBackButton = styled.button`
	position: absolute;
	top: 20px;
	left: 20px;
	border: none;
	color: white;
	background-color: transparent;
	text-transform: uppercase;
	font-weight: 700;

	@media (min-width: 768px) {
		font-size: 20px;
		&:hover {
			transform: scale(1.2);
		}
	}
`;

const BackdropDiv = styled.div`
	width: 100%;
	height: auto;
`;

const BackdropImage = styled.img`
	width: 100%;
`;
const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 10px;
	width: 80%;
	margin: 20px auto;
`;

const OverviewText = styled.p`
	line-height: 27px;
	margin-top: 10px;
`;

const Rating = styled.span`
	color: red;
	font-size: 17px;
	margin: 10px;
`;

export const MovieDetails = ({ similarId }) => {
	const { movieId } = useParams(); // a variable for param (hook)
	const [movies, setMovies] = useState([]); // a state property that collects all the movie details
	const [loading, setLoading] = useState(false);

	const history = useHistory(); //a variable that stores the users history

	useEffect(() => {
		fetchMovieDetails();
	}, [movieId]);

	const fetchMovieDetails = (movieId) => {
		setLoading(true);
		fetch(URL_DETAILS(movieId))
			.then((res) => res.json())
			.then((data) => {
				setMovies(data); //[0]
			})
			.finally(() => setLoading(false));
	};

	// //Fetch movie data detail API
	// useEffect(() => {
	// 	fetch(URL_DETAILS(movieId))
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setMovies(data); //[0]
	// 		});
	// }, [movieId]);

	const onButtonBackClick = () => {
		history.goBack();
	};

	return (
		<>
			{loading && <Loading />}
			<BackdropDiv>
				<GoBackButton className="back-button" onClick={onButtonBackClick}>
					<i className="fas fa-chevron-circle-left"></i> {"  "}
					Movies
				</GoBackButton>
				<BackdropImage
					src={
						movies.backdrop_path
							? `https://image.tmdb.org/t/p/w1280/${movies.backdrop_path}`
							: ""
					}
					alt={movies.title}
				/>
				<TextBox>
					<h2>
						{movies.title} <Rating>{movies.vote_average}/10</Rating>
					</h2>
					<OverviewText>{movies.overview}</OverviewText>
				</TextBox>
			</BackdropDiv>
			<SimilarMovies />
		</>
	);
};
