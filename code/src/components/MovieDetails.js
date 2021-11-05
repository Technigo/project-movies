import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { URL_DETAILS } from "utils/urls";
import { LoadingSpinner } from "./LoadingSpinner";
import { NotFound } from "./NotFound";
import styled from "styled-components";
import "../css/details.css";

//Global variable for image url
const imageUrl = "http://image.tmdb.org/t/p/";

const BackButtonText = styled.span`
	transition: all 0.13s ease-in;
`;

const BackButton = styled(Link)`
	position: absolute;
	top: 50px;
	left: 50px;
	font-size: 16px;
	font-weight: 700;
	color: #ffffff;
	text-decoration: none;
	display: flex;
	align-items: center;
	padding: 2px;
	&:hover ${BackButtonText} {
		transform: translateX(0.3em);
	}
`;

// Add ES6 Ignore

export const MovieDetails = () => {
	const [movie, setMovie] = useState([]);
	const [loader, setLoader] = useState(false);
	const [hasError, setHasError] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		fetchMovieDetails();
	}, []);

	const fetchMovieDetails = () => {
		setLoader(true);
		fetch(URL_DETAILS(id))
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.id) {
					setLoader(false);
					setMovie(data);
				} else {
					setHasError(true);
				}
			})
			.catch(() => setHasError(true));
	};

	if (hasError) {
		return <NotFound />;
	}

	return (
		<article className="container">
			{loader && <LoadingSpinner />}
			<div
				className="background-image"
				style={{
					backgroundImage: `
			linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(${movie.backdrop_path ? `${imageUrl}w1280${movie.backdrop_path}` : ""})`,
				}}
			>
				<BackButton to="/">
					<span className="back-icon fas fa-chevron-circle-left"></span>
					<BackButtonText>Movies</BackButtonText>
				</BackButton>
				<div className="details-container">
					<img className="poster-image" alt={movie.title} src={movie.poster_path ? `${imageUrl}w342${movie.poster_path}` : ""} />
					<div className="movie-info">
						<h1>
							{movie.title}
							<span className="rating"> {movie.vote_average}/10</span>
						</h1>
						<p className="summery">{movie.overview}</p>
					</div>
				</div>
			</div>
		</article>
	);
};
