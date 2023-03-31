// ////////////////////////////// IMPORTS //////////////////////////////////////////////// //

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../MovieList/MovieList.css';
import { Loading } from '../Loading/Loading';

// ////////////////////////////// COMPONENT //////////////////////////////////////////////// //

// This function creates a list of clickable movie-covers.
// The function starts with declaring,
// the variables and sets the useState values.

export const UpComing = () => {
  const [upComingList, setUpComingList] = useState([])
  const [loading, setLoading] = useState(false);

  // Here we are calling the API and gets the JSON inside the useEffect.
  // The fetch is done every time the page gets reloaded.
  // .catch is catching eventual errors and displays them in a consol.log
  // No options is specified for this request its per default a GET

  useEffect(() => {
    setLoading(true) // Here the loading gets a new value. This makes the <p>Loading</p> appear.
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5e0fb7ffc6ed1b5ff2d5d2db9f68e259&language=en-US')
      .then((res) => res.json())
      .then((data) => setUpComingList(data.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
      // If the fetch is a success the loading gets a new value again.
      // This makes the <p>Loading</p> disappear.
  }, []);

  // This is like a IF/ELSE-statement. IF loading === (true) display this
  // otherwise continue to the return part that displays the page.

  if (loading) {
    return (
      <Loading />
    )
  }

  // ////////////////////////////// RETURNS JXT //////////////////////////////////////////////// //

  // Here comes the return for the MovieList:
  // - We are mapping trough the movieList array and says that for each singleMovie we want to have:
  // 1: A link-url to details page. (This makes all things inside the <Link> to a clickable link)
  // 2: The cover picture
  // 3: The title
  // 4: The releasedate.

  // The "base URL" for the images = (https://image.tmdb.org/t/p/w1280) were provided by the https://api.themoviedb.org homepage
  // the /"w300" in the url is the quality of the picture and can be changed to get other sizes.

  return (
    <section className="movie-list-container">
      {upComingList.map((singleMovie) => {
        return (
          <section className="single-movie-container">
            <Link key={singleMovie.id} to={`/movieInfoPage/${singleMovie.id}`}>
              <img className="single-movie-image" src={`https://image.tmdb.org/t/p/w400${singleMovie.poster_path}`} alt={singleMovie.title} />
              <div className="overlay-container">
                <div className="title-releasedate-container">
                  <p className="title">{singleMovie.title}</p>
                  <p className="releasedate">{singleMovie.release_date}</p>
                </div>
              </div>
            </Link>
          </section>
        )
      })}
    </section>

  );
};

