import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec7efa21217def88014fde963c7b7190&language=en-US`)
        .then((res) => res.json())
        .then((json) => {           
            setDetail(json)
            // console.log(json)
        }, [id])
    })
    return (
        <article className="detailPage">
          {detail && (
                <div>
                  <h2>{detail.original_title}</h2>
                  <h3>{detail.vote_average}</h3>
                  <p>{detail.overview}</p>
                  <img src={`https://image.tmdb.org/t/p/w342${detail.poster_path}`} alt='poster'/>
                  <img src={`https://image.tmdb.org/t/p/w1280${detail.backdrop_path}`} alt='backdrop'/>
                  
                </div>
          )}
        </article>
      )
    }
    
    