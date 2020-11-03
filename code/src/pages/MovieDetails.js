import React from "react";
import { useParams } from "react-router-dom";

//make use of the linked slug here somehow ... props cannot be used

const MovieDetails = ({ title, overview, backdrop_path }) => {
  // the id is captured by MovieDetails using useParams hook; 
  //  then we can do whatever we want with it
  const { id } = useParams();
  console.log(`slug is ${id}`);

  // const BACKDROP_URL = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;

  return (
    <section>
      {id}
      {/* <img src={BACKDROP_URL} alt="" />
      <div>
        <h1>{title}</h1>
        <p>{overview}</p>
      </div> */}
    </section>
  );
};


export default MovieDetails;