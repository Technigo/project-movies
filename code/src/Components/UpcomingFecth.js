import React, { useState, useEffect } from 'react'
import { UPCOMING_URL } from '../utils/urls'
import { UpcomingList } from './UpcomingList'
import { LoadingItem } from 'Components/LoadingItem'

export const UpcomingFetch = () => {
	const [upComingMovieList, setUpComingMovieList] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch(UPCOMING_URL)
			.then((res) => res.json())
			.then((data) => setUpComingMovieList(data.results))
			.finally(() => setLoading(false))
	}, [])

	return (
		<>
			{loading && <LoadingItem />}
			{!loading && <UpcomingList movieList={upComingMovieList} />}
		</>
	)
}
