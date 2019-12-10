import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailView } from "./../../components/DetailView";

export const Detail = () => {
  const [details, setDetails] = useState([]);

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f8c1be31e73a50dc5317ce4e3571f7a6&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        // setDetails(json);
        const updatedDetails = { title: json.title, overview: json.overview };
        setDetails(updatedDetails);
        console.log(updatedDetails);
        // <DetailView title={json.title} />;
      });
  }, [movieId]);

  return (
    <section className="details-section">
      <DetailView title={details.title} overview={details.overview} />
    </section>
  );
};
