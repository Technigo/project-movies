import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "ultils/API_KEY";
import { IMG_SIZE_URL } from "ultils/API_KEY";


const MovieList = ( {movieList, setMovieList} ) => {

    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState();
    const [latest, setLatest] = useState(false);
    const [popu, setPopu] = useState(false);


  useEffect(() => {
    setLoading(true)
    fetch(API_KEY)
    .then(res => res.json())
    .then(data => setMovieList(data.results))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  },[])  

  console.log(movieList);

  console.log(movieList.map(item => item.original_language))


   useEffect(() => {
       if (filter === 'latest') {
           movieList.sort((a,b) => a.release_date < b.release_date ? 1 : -1)


       } 
       else if (filter === 'popular') {
           movieList.sort((a,b) => a.popularity < b.popularity ? 1 : -1)

       } 
       else if (filter === 'fr') {
           const frFilter = movieList.filter(item => item.original_language === 'fr')
           setMovieList(frFilter);
       } 
   
       
    },[filter])

  return (
      <>
      
      {!loading ? 
        <div>
            {/****************/}
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value='hi'>Hi</option>
                <option value='latest'>Latest</option>
                <option value='popular'>Most Popular</option>
                <option value='fr'>French</option>
                <option value='eng'>English</option>
            </select>

            {/****************/}
            {movieList.map(movie => {
              return  < div key={movie.id}>
             
              <Link to={ `${movie.id}`} key={movie.id}>
              
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
              <h2>{movie.original_title}</h2>
              <span>{movie.release_date}</span>
              </Link>
              </div>
            })}
       
        </div>
        : <p>Loading</p> }
      </>
    )
}

export default MovieList