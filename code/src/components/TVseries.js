import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TV_SERIES_URL } from 'utils/urls';

export const Tvseries = () => {
    const [tvList, setTvList] = useState([]);
  
    useEffect(() => {
      fetch(TV_SERIES_URL)
        .then((response) => response.json())
        .then((data) => setTvList(data.results))
    }, [])
 
    return (
   <section className="tv-list-card">
  {tvList.map((singleTv) => (
    <div 
    className=""
  )

   </section>