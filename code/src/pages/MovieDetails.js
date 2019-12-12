import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b5cad1b08293d5f69add78a8d839f05b&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json);
        setLoading(false);
      });
  }, []);

  return <div>Loading</div>;
};
