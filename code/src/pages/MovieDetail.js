import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetail = ({ movie, fetchMovie }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id);
  }, []);

  //   const [movie, setMovie] = useState([]);

  //   const fetchMovie = () => {
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=a4952259f6d389d2957bfec34fa69938&language=en-US`
  //     )
  //       .then((res) => res.json())
  //       .then((json) => {
  //         console.log(json);
  //         setMovie(json);
  //       });
  //   };

  //   useEffect(() => {
  //     fetchMovie();
  //   }, [id]);

  return (
    <div>
      <div>
        <h1>{movie.title}</h1>
      </div>
    </div>
  );
};
