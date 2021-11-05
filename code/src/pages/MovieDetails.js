import React, { useEffect, useState } from "react"; //import React
import { useParams, useHistory } from "react-router-dom"; //import Param and History
import styled from "styled-components"; //import Styled component

import { SimilarMovies } from "./SimilarMovies"; //import SimilarMovies component
import { Loading } from "./Loading"; //import Loading component

import { URL_DETAILS } from "./utils/Url"; //import Urls from the URL component

//Styled components

const ButtonWrapper = styled.div`
	display: flex;
	row-gap: 25px;
	width: 100%;
	top: 20px;
	left: 20px;
	position: absolute;
`;

const Button = styled.button`
	position: relative;
	margin: 0 20px;
	border: none;
	color: white;
	background-color: transparent;
	text-transform: uppercase;
	font-weight: 700;
	text-shadow: 2px 2px 2px #000;

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
	@media (min-width: 768px) {
	}
`;

// const OverViewWrapper = styled.div`
// 	position: absolute;
// `;

const OverviewText = styled.p`
	line-height: 27px;
	margin-top: 10px;
`;

const Rating = styled.span`
	color: red;
	font-size: 17px;
	margin: 10px;
`;
export const MovieDetails = () => {
	const { movieId } = useParams(); // a variable for param (hook)
	const [movies, setMovies] = useState([]); // a state property that collects all the movie details
	const [loading, setLoading] = useState(false); // a state property that holds the loading state

	const history = useHistory(); //a variable that stores the users history

	useEffect(() => {
		setLoading(true);
		fetch(URL_DETAILS(movieId))
			.then((res) => res.json())
			.then((data) => {
				setMovies(data);
			})
			.finally(() => setLoading(false));
	}, [movieId]);

	const onButtonBackClick = () => {
		history.goBack();
	};

	const onHomePageRedirect = () => {
		history.push("/");
	};

	return (
		<>
			{/* Displaying data, mounting the styled components and the loading screen */}
			{loading && <Loading />}
			<BackdropDiv>
				<ButtonWrapper>
					<Button className="back-button" onClick={onButtonBackClick}>
						<i className="fas fa-chevron-circle-left"></i> {"  "}
						Movies
					</Button>
					<Button onClick={onHomePageRedirect}>
						<i class="fas fa-home"></i> Home page
					</Button>
				</ButtonWrapper>
				<div>
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
						{/* <OverViewWrapper> */}{" "}
						<OverviewText>{movies.overview}</OverviewText>
						{/* </OverViewWrapper> */}
					</TextBox>
				</div>
			</BackdropDiv>
			<SimilarMovies />
		</>
	);
};
