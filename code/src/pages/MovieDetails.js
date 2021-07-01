import React, { useEffect, useState } from "react";
import Backdrop from "../components/Backdrop";
import NotFound from "./NotFound";
import "./MovieDetails.css";

const MovieDetails = ({ match }) => {
  const apiKey = "9afc6869d833b483aa834ef461668853";
  const URL = `https://api.themoviedb.org/3/movie/${match.params.movieId}?api_key=${apiKey}&language=en-US`;
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Ropa på api asynkront
    fetch(URL, {
      method: "GET",
    })
      .then((raw) => {
        return raw.json();
      })

      .then((formatted) => {
        console.log(formatted.success);
        if (formatted.success === false) {
          setError(true);
        } else {
          setDetails(formatted);
        }
      });
  }, [URL]); // Kolla om gotError har ändrats, kör igen i så fall

  if (error) {
    return <NotFound />;
  } else {
    return (
      <div className='details wrapper'>
        <Backdrop details={details} />
        <div className='content'>
          <div className='introduction'>
            <h3 className='movie-title'>{details.title}</h3>
            <h4 className='tagline'>{details.tagline}</h4>
            <p className='overview'>{details.overview}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetails;
