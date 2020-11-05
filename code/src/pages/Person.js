import React, { useEffect, useState, Redirect } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

import Loading from "../components/Loading";
import NotFound from "./NotFound";

const Person = () => {
  const { personId } = useParams();
  const [person, setPerson] = useState({});
  const [status, setStatus] = useState(200);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const API_KEY = "f7e0c4070f4665dbae6d58fba626cfe4";
  const URL = `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=en-US`;

  console.log("URL2", URL);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        console.log(res.status);
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
        console.log("person", personId);
        console.log("error", error);
      });
  }, [personId, URL]);

  if (status === 404) {
    console.log("Status 404");
    history.push("/404");
  }

  console.log("Person:", person);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {person.name}

          <img
            src={`http://image.tmdb.org/t/p/w342${person.profile_path}`}
            alt={person.name}
          />
        </div>
      )}
    </>
  );
};

export default Person;
