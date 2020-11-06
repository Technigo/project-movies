import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../urls.js'
import { API_KEY } from '../API_KEY.js'

export const TVShowDetails = () => {
  // eslint-disable-next-line
  const [tvShow, setTVShow] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const TVSHOW_URL = `${API_URL}${id}?&api_key=${API_KEY}&language=en-US`;
    fetch(TVSHOW_URL)
      .then(res => res.json())
      .then(tvShow => setTVShow(tvShow));
  }, [id]);

  return <section className="tv-show-container">Hello World!</section>
}