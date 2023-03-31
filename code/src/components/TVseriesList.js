
import React, { useEffect, useState } from 'react'
import { TVSHOW_URL } from 'utils/Urls'
import { TVSeries } from './TVseries'

export const TVSeriesList = () => {
  const [tvList, setTvList] = useState([])

  const FetchTvSeriesList = () => {
    fetch(TVSHOW_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        setTvList(data.results)
      })
  }
  useEffect(() => {
    FetchTvSeriesList()
  }, [])

  return (
    <main>
      {tvList.map((tvshow) => (
        <div
          className="tv-list-card"
          key={tvshow.id}>
          <TVSeries
            singleTvID={tvshow.id}
            originalName={tvshow.original_name}
            singleTvAirDate={tvshow.first_air_date}
            poster={tvshow.poster_path} />
        </div>
      ))}
    </main>
  )
}