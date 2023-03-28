import React, { useState, useEffect} from 'react';
import { Movies } from './Movies';

const Details = ({ singleMovie }) => {
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${singleMovie.id}?api_key=4d07e418e3a6ee346618c7a898de9210&language=en-US&page=1`)
      .then((response) => response.json())
      .then((fetchData) => {
        setDetails(fetchData);
        console.log(fetchData);
      });
  }, [singleMovie.id]);
  return (
    <div>
      {singleMovie.id}
    </div>
  )
};

export default Details;