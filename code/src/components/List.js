import React, { useEffect, useState } from "react";
import { URL_LIST } from "utils/urls";

export const List = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch(URL_LIST)
			.then((response) => response.json())
			.then((data) => setList(data.results));
	}, []);

	return <div>Find me in src/app.js!</div>;
};
