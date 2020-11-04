import React, { useEffect, useState } from "react";

import { API_URL, API_IMG_URL } from "../urls.js";
import { API_KEY } from "../API_KEY.js";

export const TVShowList = () => {
  // eslint-disable-next-line
  const [TVShowList, setTVShowList] = useState([]);

  console.log("Render");

  const imageURL = `${API_IMG_URL}/w300/`;

  const fetchTVShows = () => {
    const TV_URL = `${API_URL}popular?&api_key=${API_KEY}&page=1`;

    fetch(TV_URL)
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data.results);
        setTVShowList(data.results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchTVShows();
  }, []);

  return (
    <article className="tvshow__container">
      {TVShowList.map(tvshow => (
        <div className="tvshow__wrapper" key={tvshow.id}>
          <div className="tvshow">
            <img className="tvshow__image" src={`${imageURL}${tvshow.poster_path}`} alt={tvshow.name} />
            <div className="tvshow__textbox">
              <h4 className="tvshow__name">{tvshow.name}</h4>
              <p className="tvshow__text">First aired: {tvshow.first_air_date}</p>
            </div>
          </div>
        </div>
      ))}
      )
    </article>
  );
};
