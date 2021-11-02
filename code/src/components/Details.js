import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DETAILS_URL } from '../utils/urls';

const Details = () => {
  const [details, setDetails] = useState({});

  const { id } = useParams();

  // console.log(DETAILS_URL(id));

  useEffect(() => {
    fetch(DETAILS_URL(id))
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [id]);

  return (
    <div
      className="details__backdrop"
      key={details.id}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
      }}
    >
      <h2>{details.tagline}</h2>
      <h2>{details.overview}</h2>
    </div>
  );
};

export default Details;

// const Details = () => {
//   const [details, setDetails] = useState({});
//   const { id } = useParams();

//   console.log(DETAILS_URL(id));

//   useEffect(() => {
//     fetch(DETAILS_URL(id))
//       .then((res) => res.json())
//       .then((data) => setDetails(data));
//   }, [id]);
//   return (
//     <div>
//       <h2>{details.title}</h2>
//     </div>
//   );
// };
