import React from 'react'

export const MovieList = ({ list }) => {
const movieURL = `https://image.tmdb.org/t/p/w1280/${poster_path}`;
   
    return (
      <section>
           {list.map((movie)=>(
        <div style={{ backgroundColor: "red" }}>
        <div>{`img src= ${movieURL}`}</div>
       <h2>{movie.id}</h2>
    </div>
      ))}
      </section>
      )
}

{/* <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}/>
</img> */}

{/* <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="film poster"/> */}



// <section>
// {list.map((movie) => (
// <div style={{ backgroundImage: `url:(https://image.tmdb.org/t/p/w780${movie.poster_path})`}}>
//        <h1>Hej</h1>
//    </div>
// )
//  </section>


// https://image.tmdb.org/t/p/w1280${movie.poster_path}