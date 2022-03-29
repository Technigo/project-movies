import React from "react";

const PopularList = ({movielist}) => {
    
  return ( 

    <main> 
        {movielist.map((popular) => { 
            return (<div key={popular.id}>
                <img className="card-images" src={`https://image.tmdb.org/t/p/w300${popular.backdrop_path}`} alt={popular.original_title}/>
                <h3>{popular.original_title}</h3>
                <p>{popular.release_date}</p>
            </div>)
        })}
        
        </main>
  )
  
};
export default PopularList;