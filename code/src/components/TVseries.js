import React, { useEffect, useState } from 'react';
import { TVSHOW_URL, CONFIG_URL } from 'utils/Urls';

export const TVseries = () => {
  const [tvShow, setTvShow] = useState([]);
  const [imgConfig, setConfig] = useState({});

  useEffect(() => {
    fetch(CONFIG_URL)
      .then((res) => res.json())
      .then((json) => {
        console.log('Fetched config:');
        console.log(json);
        setConfig(json.images);
      })
      .catch((error) => alert(error, 'Error fetching config'))
      .then(() => {
        fetch(TVSHOW_URL)
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setTvShow(json.results);
          })
          .catch((error) => alert(error, 'Error fetching shows'))
      });
  }, []);

  const shows = tvShow.map((show) => {
    let posterImage = null

    if (show.poster_path != null) {
      posterImage = (<img alt={`Poster for: ${show.name}`} src={`${imgConfig.secure_base_url}w500${show.poster_path}`} />);
    } else {
      posterImage = (<div>[No image]</div>);
    }

    return (
    // This should probably be a component
      <div
        className="movie-card"
        key={show.id}
        poster={show.poster_path}>
        {show.name}
        {/* Another component */}
        {posterImage}
      </div>
    );
  });

  return (<div>{shows}</div>);
}