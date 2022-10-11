import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Movie from '../components/Movie'

const Details = ({ movies }) => {
  // const params = useParams(); // Version1
  const { movieName } = useParams(); // Version2; rekommenderat!
  const navigate = useNavigate();

  console.log('this is what we get from LIST', movies)

  const movieMatch = movies.find((movie) => movie.movieName === movieName)
  useEffect(() => {
    console.log('test', movieName);
  }, [movieName])

  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <button type="button" onClick={goBack}>Go back</button>
      <Movie
        name={movieMatch.title}
        poster={movieMatch.poster_path}
        backdrop={movieMatch.backdrop_path}
        overview={movieMatch.overview}
        average={movieMatch.vote_average} />
      {/* <p>{movieName}</p> */}
    </div>
  )
}

export default Details;