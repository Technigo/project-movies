import React, { useEffect, useState } from "react";

import { API_URL } from "../urls.js";
import { API_KEY } from "../API_KEY.js";
import { TVShowThumb } from "./TVShowThumb.js";

export const TVShowList = () => {
  // eslint-disable-next-line
  const [TVShowList, setTVShowList] = useState([]);

  console.log("Render");

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
    <section className="tvshow_list__container">
      {TVShowList.map(tvshow => (
        <TVShowThumb key={tvshow.id} {...tvshow} />
      ))}
      )
    </section>
  );
};
