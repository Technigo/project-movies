import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  //   const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f86cf72a5f604a49cde375a4fa2c6d61&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }, [id]);

  return <h2>hej igen</h2>;
};
