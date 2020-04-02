import React, { useState, useEffect } from "react"
import { AlbumCard } from "./AlbumCard"


export const MostWatched = () => {
    const AlbumsUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=152a795b257fc72185075a56f4465931&language=en-US&page=1"
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
        <section className= "card-wrapper">
        <h1 className="header">Most Watched Today!</h1>
           {albums.map((albumItem) =>
                 <AlbumCard {...albumItem}/>
            )}
         </section>
    )
}