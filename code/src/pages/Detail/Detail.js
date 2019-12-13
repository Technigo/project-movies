import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailView } from "./../../components/DetailView";

export const Detail = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();
  console.log(movieId);

  const fetchData = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f8c1be31e73a50dc5317ce4e3571f7a6&language=en-US`
    );
    const json = await resp.json();
    // const updatedDetails = { title: json.title, overview: json.overview };
    setDetails({ ...json });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    // .then(res => res.json())
    // .then(json => {
    //   // setDetails(json);
    //   const updatedDetails = { title: json.title, overview: json.overview };
    //   setDetails(updatedDetails);
    //   console.log(updatedDetails);
    //   // <DetailView title={json.title} />;
    // });
  }, []);

  return (
    <section className="details-section">
      {loading && (
        <h2 className="loading">Loading details..................</h2>
      )}
      <DetailView
        title={details.title}
        overview={details.overview}
        rating={details.vote_average}
        image={details.poster_path}
        backgroundImage={details.backdrop_path}
      />
    </section>
  );
};
