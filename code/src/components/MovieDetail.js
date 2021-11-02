import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";
import { API_KEY } from "Urls";
import Loading from "./Loading";

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Title: {id} </h2>
    </div>
  );
};

export default MovieDetail;
