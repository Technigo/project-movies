import React, { useState, useEffect } from "react"
import { AlbumCard } from "./AlbumCard"


export const BestChoice = () => {
    const AlbumsUrl = "https://api.themoviedb.org/3/movie/popular?api_key=152a795b257fc72185075a56f4465931&language=en-US&page=1"
    const [albums, setAlbums] = useState ([])
   
   
   useEffect (() => {
       fetch (AlbumsUrl)
       .then (res => res.json())
       .then (json => setAlbums(json.results))
   })
   if (!albums) {
    return <>Not Found</>
}

    return (
        
         <section className= "list-wrapper">
            <h1 className="header">Only the good ones!</h1>
             
         {albums.filter(albumItem => albumItem.vote_average < 7).map(albumItem => 
            <AlbumCard {...albumItem}/>
         )}
         </section> 
    )
}
