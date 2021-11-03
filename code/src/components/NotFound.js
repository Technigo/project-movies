import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding-bottom: 15vh;
`;

const ErrorHeading = styled.h1`
	font-size: 130px;
	margin: 0px;
`;

const ErrorText = styled.p`
	font-size: 20px;
`;

const GoBackButtons = styled.button`
	padding: 12px;
	margin: 10px;
	border-radius: 20px;
	background-color: #fff;
	border: 2px solid #212427;
	font-size: 15px;
	&:hover {
		background-color: #212427;
		border: 2px solid #fff;
		color: #fff;
	}
`;

export const NotFound = () => {
	const history = useHistory();

	const onHomePageRedirect = () => {
		history.push("/");
	};

	const onPreviousPageRedirect = () => {
		history.goBack();
	};

	return (
		<ErrorContainer>
			<ErrorHeading>404</ErrorHeading>
			<ErrorText>Page not found</ErrorText>
			<div>
				<GoBackButtons onClick={onHomePageRedirect}>Back to the home page</GoBackButtons>
				<GoBackButtons onClick={onPreviousPageRedirect}>Back to the previous page</GoBackButtons>
			</div>
		</ErrorContainer>
	);
};
