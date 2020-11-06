import React, { useEffect, useState } from "react";

import { API_URL } from "../urls.js";
import { API_KEY } from "../API_KEY.js";
import { TVShowThumb } from "../components/TVShowThumb.js";

export const TVShowList = () => {
  const [TVShowList, setTVShowList] = useState([]);

  const fetchTVShows = () => {
    const TV_URL = `${API_URL}popular?&api_key=${API_KEY}&page=1`;

    fetch(TV_URL)
      .then((res) => res.json())
      .then((TVShowList) => {
        console.log(TVShowList.results);
        setTVShowList(TVShowList.results);
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
