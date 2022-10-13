/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
//   const params = useParams();
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a&language=en-US`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json)
        console.log("fetch ID", movie)
      })
  }, [id]);

  const navigate = useNavigate();
  useEffect(() => {
    // console.log(id);
  });
  const goBack = () => {
    navigate(-1);
  }
  return (
    <section className="movie-container">´
      <div className="backdrop">
        <button type="button" onClick={goBack}> 👈🏼 Movies </button>
        <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
      </div>
      <div className="details-containter">
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        </div>

        <div className="movieInfo">
          <h2>{movie.title} </h2>
          <h3 className="vote-average"> ⭐️ {Math.round(movie.vote_average * 10) / 10}/10 </h3>
          <a type="image/png" sizes="32x32" href="https://img.icons8.com/3d-fluency/2x/star.png"> </a>
          <p>{movie.overview}</p>
        </div>
      </div>

    </section>
  );
}

export default Details;

// url for movie-details: https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
// https://api.themoviedb.org/3/movie/550?api_key=35a0fb6f5f3fde8a6e6cf4ca489b902a

/*
"adult": false,
    "backdrop_path": "/3TsnQdMvxdfgLkWqwQYeILBCbbx.jpg",
    "belongs_to_collection": {
        "id": 760193,
        "name": "Orphan Collection",
        "poster_path": "/q8icPVro0MYLTXbttS1KMpdQntP.jpg",
        "backdrop_path": "/nsslKmD5WIYhJ0fO5MDeE6ZjIKp.jpg"
    },
    "budget": 0,
    "genres": [
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 53,
            "name": "Thriller"
        }
    ],
    "homepage": "",
    "id": 760161,
    "imdb_id": "tt11851548",
    "original_language": "en",
    "original_title": "Orphan: First Kill",
    "overview": "After escaping from an Estonian psychiatric
    facility, Leena Klammer travels to America by impersonating Esther,
    the missing daughter of a wealthy family. But when her mask starts to slip,
    she is put against a mother who will protect her
    family from the murderous “child” at any cost.",
    "popularity": 4228.914,
    "poster_path": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
    "production_companies": [
        {
            "id": 1786,
            "logo_path": "/joLFuCWg9e2lweYnFQtRPJKSLlI.png",
            "name": "Dark Castle Entertainment",
            "origin_country": "US"
        },
        {
            "id": 8147,
            "logo_path": "/q6HOAdSNgCbeOqwoMVRc6REgbXF.png",
            "name": "Entertainment One",
            "origin_country": "CA"
        },
        {
            "id": 63576,
            "logo_path": "/4qMMMs4smEdD2fjoLLSSleRjG9J.png",
            "name": "Eagle Vision",
            "origin_country": "CA"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "CA",
            "name": "Canada"
        },
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2022-07-27",
    "revenue": 9572765,
    "runtime": 99,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "english_name": "Estonian",
            "iso_639_1": "et",
            "name": "Eesti"
        }
    ],
    "status": "Released",
    "tagline": "There's always been something wrong with Esther.",
    "title": "Orphan: First Kill",
    "video": false,
    "vote_average": 6.888,
    "vote_count": 952
} */