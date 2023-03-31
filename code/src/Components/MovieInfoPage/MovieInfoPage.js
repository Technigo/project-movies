// ////////////////////////////// IMPORTS //////////////////////////////////////////////// //

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieInfoPage.css';

// ////////////////////////////// COMPONENT //////////////////////////////////////////////// //

// The function MovieInfoPage makes a fetch call and displays details about a chosen movie

export const MovieInfoPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false); // Here we set the default value to loading.
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  // Here we are calling the API and gets the JSON inside the useEffect.
  // In the React Hook called useEffect The fetch is done every time the page gets reloaded.
  // .catch is catching eventual errors and displays them in a consol.log
  // No options is specified for this request its per default a GET

  useEffect(() => {
    setLoading(true)
    console.log(loading)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5e0fb7ffc6ed1b5ff2d5d2db9f68e259&language=en-US`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [id]); // <--- This is the dependency array.
  // When you put something(variables) in here like the ID here,
  //  it executes every time the array change.

  // This function called returnToHomePage has one purpose.
  // It navigates with the useNavigate React Hook to the rout = '/' that is the homepage.
  // So when the button gets "onClicked" it starts this function.

  const returnToHomePage = () => {
    navigate(-1);
  };

  // ////////////////////////////// RETURNS JXT //////////////////////////////////////////////// //

  // Here comes the return for the MovieInfoPage:
  // - We have created a section were the background from the API is displayed.
  // - We have a button that navigates back to homepage using the useNavigate Hook.
  // - We are also displaying a movie title, a movie-cover, info-text and imdb rating.

  // The "base URL" for the images = (https://image.tmdb.org/t/p/w1280) were provided by the https://api.themoviedb.org homepage
  // the /"w1280" in the url is the quality of the picture and can be changed to get other sizes.

  return (
    <section
      className="details-container"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgb(0,0,0) 100%), 
      url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})` }}>
      <div className="home-button-div">
        <button type="button" className="home-button" onClick={returnToHomePage}> <h1>Go Back</h1> </button>
      </div>
      <div className="movie-info-container">
        <img className="poster-image" src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`} alt="movie poster" />
        <div className="movie-detail-div">
          <div className="title-imdb-div">
            <h1 className="details-title">{details.title}</h1>
            <h1 className="imdb-numbers"><span>&#11088; {details.vote_average?.toFixed(1)}</span></h1>
          </div>
          <p className="movie-overview">{details.overview}</p>
          {/* the .toFixes method gives us the opportunity to decide how many decimals we want.
            The questionmark checks if the answer from the api is valid to use */}
        </div>
      </div>
    </section>
  );
}
