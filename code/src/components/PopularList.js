import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
//import "./movieList.css"

export const PopularList = () => {
  const { movieId } = useParams()
  //const [movie, setMovie] = useState([])


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=55cd0e0e418083e581aec6766c6a1677&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
            //setMovie(json)
        })
}, [movieId])

  return (

    <section 
      
      className="detailPage">
      <Link 
        
        className="backLink" to={'/'}></Link>



    </section>
  )
}