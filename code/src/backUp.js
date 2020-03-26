// APP JS

// import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { MovieList } from "./MovieList";
// import { MovieDetails } from "./MovieDetails";
// // import "./styles.css";

// export const App = () => {
//   const key = "1ff77d3fb46cefb77c7370504c6cb69d"
//   return (
    
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" exact>
//           <MovieList id = {key} />
//         </Route>
//         <Route path="/movies/:id">
//           <MovieDetails id = {key} />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// };


// List JS

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export const MovieList = ({id}) => {
//   const [movies, setMovies] = useState([]);
//   const [category, setCategory] = useState("popular");

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${category}?api_key=${id}&language=en-US&page=1`
//     )
//       .then(res => res.json())
//       .then(json => {
//           setMovies(json.results)
//           console.log(json)
//         });
//   }, [category]);

//   return (
//     <div>
//         <select value={category} onChange={e => setCategory(e.target.value)}>
//           <option value="popular">Popular</option>
//           <option value="top_rated">Top Rated</option>
//           <option value="upcoming">Upcoming</option>
//         </select>
//       {movies.map(movie => (
   
//         <Link key={movie.id} to={`/movies/${movie.id}`}>
//           <img
//             src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
//             alt={movie.title}
//           />
//           <h1>{movie.title}</h1>
//         </Link>
//       ))}
//     </div>
//   );
// };


// Details JS

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// // import { BackArrow } from "./icons/BackArrow";

// export const MovieDetails = (props) => {
//   const [movie, setMovie] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();
//   const {key} = props

//   useEffect(() => {
//     setLoading(true);
//     fetch(
//       `https://api.themoviedb.org/3/movie/${id}?api_key=${props.id}d&language=en-US&page=1`
//     )
//       .then(res => res.json())
//       .then(json => {
//         if (json.status_code === 34) {
//           setError("Movie not found");
//         } else {
//           setMovie(json);
//         }

//         setLoading(false);
//       });
//   }, [id]); // We need to pass id as a dependecy here so everytime the id changes, we do a new fetch.

//   if (loading) {
//     return <h1>LOADING</h1>;
//   }

//   if (error) {
//     return <h1>{error}</h1>;
//   }

//   return (
//     <div>
//       <Link to="/" className="backLink">
//         {/* <BackArrow /> */}
//         Back
//       </Link>
//       <h1>{movie.title}</h1>
//     </div>
//   );
// };