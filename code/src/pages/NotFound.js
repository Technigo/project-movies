import React from "react"; //import react
import { useHistory } from "react-router-dom"; //import use history
import styled from "styled-components"; //import Styled component

const NoTFoundContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 20px;
	margin-top: 100px;
`;
const HomePageBtn = styled.button`
	border-radius: 20px;
	padding: 10px;
`;

const PreviousPageBtn = styled.button`
	border-radius: 20px;
	padding: 10px;
`;
const NotFound = () => {
	const history = useHistory();

	// a function to redirect back to the homepage
	const onHomePageRedirect = () => {
		history.push("/");
	};

	// a function to redirect back to the previous page
	const onPreviousPageRedirect = () => {
		history.goBack();
	};

	return (
		<NoTFoundContainer>
			<p>Sorry, this page doesn't exist</p>
			<HomePageBtn onClick={onHomePageRedirect}>
				{" "}
				Back to home page{" "}
			</HomePageBtn>
			<PreviousPageBtn onClick={onPreviousPageRedirect}>
				{" "}
				Back to previous page{" "}
			</PreviousPageBtn>
		</NoTFoundContainer>
	);
};

export default NotFound;
