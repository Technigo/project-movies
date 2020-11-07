import React, { useEffect, useState } from "react";

import { API_KEY } from "../API_KEY.js";
import { API_URL } from "../urls.js";
import { TvShowThumb } from "../components/TvShowThumb.js";

export const ListPage = () => {
  const [tvShowList, setTvShowList] = useState([]);

  const fetchTvShows = () => {
  const TV_URL = `${API_URL}popular?&api_key=${API_KEY}&page_1`;
    
    fetch(TV_URL)
      .then((res) => res.json())
      .then((tvShowList) => {
        console.log(tvShowList.results);
        setTvShowList(tvShowList.results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchTvShows();
  }, []);

  return (
    <section className="tvshow-list--container">
      {tvShowList.map(tvshow => (
        <TvShowThumb key={tvshow.id} {...tvshow} />
      ))}
    </section>
  );
};
