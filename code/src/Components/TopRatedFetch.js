import React, { useState, useEffect } from 'react'
import { TOP_RATED_URL } from '../utils/urls'
import { TopRatedList } from 'Components/TopRatedList'
import { LoadingItem } from 'Components/LoadingItem'

export const TopRatedFetch = () => {
	const [topRatedMovieList, setTopRatedMovieList] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch(TOP_RATED_URL)
			.then((res) => res.json())
			.then((data) => setTopRatedMovieList(data.results))
			.finally(() => setLoading(false))
	}, [])

	return (
		<>
			{loading && <LoadingItem />}
			{!loading && <TopRatedList movieList={topRatedMovieList} />}
		</>
	)
}
