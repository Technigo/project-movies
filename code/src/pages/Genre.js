import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const apiKey = "0a7bdc5f7b44e6a5230c95a3dbb9bbbc"
// https://api.themoviedb.org/3/discover/movie?api_key=0a7bdc5f7b44e6a5230c95a3dbb9bbbc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28
// /discover/movie ? with_genres = 35
export const Genre = () => {
  const [genre, setGenre] = useState([])
  const [genreName, setGenreName] = useState()
  const { genreId } = useParams()
  // const { genreName } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.results)
        setGenre(json.results)
      })
  }, [genreId])


  //To get genre-name
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.genres)
        console.log(json.genres[0].name)

        if (genreId === "28") {
          setGenreName(json.genres[0].name)
        } else if (genreId === "12") {
          setGenreName(json.genres[1].name)
        } else if (genreId === "16") {
          setGenreName(json.genres[2].name)
        } else if (genreId === "35") {
          setGenreName(json.genres[3].name)
        } else if (genreId === "80") {
          setGenreName(json.genres[4].name)
        } else if (genreId === "99") {
          setGenreName(json.genres[5].name)
        } else if (genreId === "18") {
          setGenreName(json.genres[6].name)
        } else if (genreId === "10751") {
          setGenreName(json.genres[7].name)
        } else if (genreId === "14") {
          setGenreName(json.genres[8].name)
        } else if (genreId === "36") {
          setGenreName(json.genres[9].name)
        } else if (genreId === "27") {
          setGenreName(json.genres[10].name)
        } else if (genreId === "10402") {
          setGenreName(json.genres[11].name)
        } else if (genreId === "9648") {
          setGenreName(json.genres[12].name)
        } else if (genreId === "10749") {
          setGenreName(json.genres[13].name)
        } else if (genreId === "878") {
          setGenreName(json.genres[14].name)
        } else if (genreId === "10770") {
          setGenreName(json.genres[15].name)
        } else if (genreId === "53") {
          setGenreName(json.genres[16].name)
        } else if (genreId === "10752") {
          setGenreName(json.genres[17].name)
        } else if (genreId === "37") {
          setGenreName(json.genres[18].name)
        }

      })

  }, [genreId])


  return (
    <div>
      <hr></hr>
      <h1>Showing: {genreName} movies</h1>

      <section className="all-movies"> {/*Change this later to similar-movies */}

        {genre.map((movie) => (
          <div className="poster" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>

              {/* style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})` }}> */}
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
              <div className="title-release" key={movie.id}>
                <h1>{movie.title}</h1>
                <p>Released: {movie.release_date}</p>
              </div>
            </Link>
          </div>
        ))


        }
      </section>
    </div>
  )

}