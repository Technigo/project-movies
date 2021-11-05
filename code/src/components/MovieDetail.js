import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAIL_URL } from "utils/url";
import Nav from "./Nav";
import Loading from "./Loading";
import PageNotFound from "./PageNotFound";

const MovieDetail = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(DETAIL_URL(id))
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setDetail(data);
        } else {
          setHasError(true);
        }
      })
      .catch(() => setHasError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (hasError) {
    return <PageNotFound />;
  }
  console.log(detail);

  return (
    <section className="detail-container">
      {loading && <Loading />}
      <div
        className="background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${detail?.backdrop_path}),
          linear-gradient(rgba(0,0,0,0) 70%,rgba(0,0,0,100%)`,
        }}
        alt={detail?.title}
      >
        <Nav />
        <div className="summary">
          <img
            className="movie-detail"
            src={
              detail.poster_path
                ? `https://image.tmdb.org/t/p/w500${detail.poster_path}`
                : ""
            }
            alt="movie-title"
          />
          <div className="detail">
            <div className="title">{detail?.title}</div>
            <div className="rating">{detail?.vote_average}/10</div>
            <p className="overview">{detail?.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieDetail;
