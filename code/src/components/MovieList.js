import React from 'react';


export const MovieList = () => {
    
    const MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?api_key=9dbb13757543047a90651a50d540380e&language=en-US&page=1";
   

    fetch(MOVIES_URL)
    .then(response => response.json())
    .then((json) => console.log(json.results))

    return (    
       <section>
      movies goes here
      </section>
      
      )


  }



        