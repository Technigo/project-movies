import React from "react";
import { Link } from 'react-router-dom';

const PopularList = ({movielist}) => {
    
  return ( 

    <main> 
        {movielist.map((popular) => (  
             <div key={popular.id}>
                <img className="card-images" src={`https://image.tmdb.org/t/p/w300${popular.backdrop_path}`} alt={popular.original_title}/>
                <h3>
                <Link to={`/movie/${popular.id}`}>
                {popular.original_title}
                </Link>
                </h3>
                <p>{popular.release_date}</p>
            </div>
        ))}

        </main>   
  )
  
};
export default PopularList;