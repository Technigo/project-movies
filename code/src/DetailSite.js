import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//import { DETAIL_URL } from "./utils/urls";

const DetailSite = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5c4188456a9b734458844d02dc8962a9&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
      });
  }, [id]);

  return <div>hellooooo</div>;
};

export default DetailSite;
