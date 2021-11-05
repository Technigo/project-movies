import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
//three api end points
import { API_MOVIE_LIST_POPULAR } from "./Links";
import { API_MOVIE_LIST_TOP_RATED } from "./Links";
import { API_MOVIE_LIST_UPCOMING } from "./Links";
import { OverLay } from "./OverLay";
import { Select } from "./Select";
import { Loader } from "./Loader";
import "../index.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // special state to hold current state of the select
  const [change, changeTracker] = useState("popular");

  useEffect(() => {
    // declaring a variable that will act as a dynamic stitcher for the api link
    let URL;
    // if user selected popular we are reassigning the URL variable to the related API link
    //similar with other 2 end points
    if (change === "popular") {
      URL = API_MOVIE_LIST_POPULAR;
    } else if (change === "toprated") {
      URL = API_MOVIE_LIST_TOP_RATED;
    } else {
      URL = API_MOVIE_LIST_UPCOMING;
    }
    setLoading(true);
    //here we are passing the dynamically changing URL varible to the fetch
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setLoading(false);
      });
    //also to make useeffect catch the change in current state of the selector we are passing the change as a dependency
  }, [setLoading, change]);

  return (
    <>
      <Select change={change} changeTracker={changeTracker} />
      <div className="grid">
        {(loading && (
          <div className="loader-wrapper">
            <Loader color={"goldenrod"} width={120} height={120} />
            <p className="lazy-data-loader">
              Data is lazy today{" "}
              <span role="img" aria-label="smile">
                &#128512;
              </span>
              . Let's wait a little...{" "}
            </p>
          </div>
        )) ||
          movies.map((movie) => (
            <div className="movie-container" key={movie.id}>
              <img
                alt={`${movie.original_title} `}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              />
              <Link to={`/movieDetails/${movie.id}`}>
                <OverLay>
                  <h2>{movie.original_title}</h2>
                  <p>
                    Released {moment(movie.release_date).format("MMM Do YY")}
                  </p>
                </OverLay>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};
