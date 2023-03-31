
import React, { useEffect, useState } from 'react'
import { TVSHOW_URL } from 'utils/Urls'
import { TVseries } from 'components/TVseries'

export const TvSeriesList = () => {
    const [tvList, setTvList] = useState([])

    const fetchTvSeriesList = () => {
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
    }


return (
  <main>
    {tvList.map((singleTv) => (
        <div
        className="tv-list-card"
        key={singleTv.id}>
        <TVseries
        singleTvID={singleTv.id}
        originalName={singleTv.original_name}
        releaseDate={singleTv.first_air_date}
        singleTvPoster={singleTv.poster_path} />
  </div>
    ))}
</main>
    )
