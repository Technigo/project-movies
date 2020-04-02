import React, { useState, useEffect } from "react"
import { AlbumCard } from "./AlbumCard"


export const AlbumList = () => {
    const AlbumsUrl = "https://api.themoviedb.org/3/movie/popular?api_key=152a795b257fc72185075a56f4465931&language=en-US&page=1"
    const [albums, setAlbums] = useState ([])
   
   
   useEffect (() => {
       fetch (AlbumsUrl)
       .then (res => res.json())
       .then (json => setAlbums(json.results))
   })
   if (!albums) {
    return <>Paitence, still loading.. </>
}

    return (
        
         <section className="list-wrapper">
         
            {albums.map(albumItem => 
                <AlbumCard {...albumItem}/>
            )}
         </section> 
    )
}

