import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Loading from "../components/Loading";
import "./person.css";

const Person = () => {
  const { personId } = useParams();
  const [person, setPerson] = useState({});
  const [status, setStatus] = useState(200);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const API_KEY = "f7e0c4070f4665dbae6d58fba626cfe4";
  const URL = `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        setStatus(res.status);
        return res.json();
      })
      .then((json) => {
        setPerson(json);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [personId, URL]);

  if (status === 404) {
    history.push("/404");
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="person-container">
          <button
            type="button"
            className="back-to-movies"
            onClick={() => history.goBack()}
          >
            <span>&#10094; </span>
            <span className="back">Movie</span>
          </button>
          <div className="person-card">
            <img
              src={`http://image.tmdb.org/t/p/w1280${person.profile_path}`}
              alt={person.name}
            />
            <div className="person-info">
              <h5 className="person-name">{person.name}</h5>
              <p className="person-birth">{person.birthday}</p>
              <p className="person-born">{person.place_of_birth}</p>
              <p className="person-biography">{person.biography}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Person;
