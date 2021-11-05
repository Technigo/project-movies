import React, { useEffect, useState } from "react";
import { useParams, Route } from "react-router-dom";
import { useHistory } from "react-router";
import Loader from "./Loader";
import { DETAIL_URL } from "../utils/urls";

import "./Details.css";
import NotFound from "./NotFound";

const Details = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [notFound, setNotFound] = useState(false); // state property to load not found page if movie id is incorrect
  const [loading, setLoading] = useState(false); // state property for loader intialized with false

  const { id } = useParams(); // retrieving the id from url which is passed from the home page to display details for one unique movie
  const history = useHistory(); // remembers previously rendered pages

  const fetchDetails = (id) => {
    setLoading(true);
    // inserting the dynamic id into the url to fetch the details of the movie in question
    fetch(DETAIL_URL(id))
      .then((res) => res.json())
      .then((data) => {
        // if a correct id can be found in the path set assign data to setMovieDetail
        if (data.id) {
          setMovieDetail(data);
          // if not, set state to NotFound
        } else {
          setNotFound(true);
        }
      })
      .finally(() => setLoading(false))
      .catch(() => setNotFound(true));
  };

  useEffect(() => {
    fetchDetails(id);
  }, [id]);

  const onButtonBackClick = () => {
    history.push("/"); // function that tells button to "push" to specified path
  };

  //re-routing to NotFound page if state notFound is true
  if (notFound) {
    return <Route component={NotFound} />;
  }

  return (
    <>
      {loading && <Loader />}
      <section className="detail-page">
        <div
          className="background-container"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path})`,
          }}
        >
          <button className="back-button" onClick={onButtonBackClick}>
            <span
              className="back-button-img"
              role="img"
              aria-label="back-button"
            >
              ⇦
            </span>
            Movies
          </button>
          <div className="info-container">
            <div className="img-container">
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`}
                alt={movieDetail.title}
              />
            </div>
            <div className="info-text">
              <h1>
                {movieDetail.title}{" "}
                <span className="rating">{movieDetail.vote_average}/10</span>
              </h1>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
