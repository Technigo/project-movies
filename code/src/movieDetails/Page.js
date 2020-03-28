import React from 'react'


export const Page = ({item}) => {

    return (
        <main>
            <h2>{item.title}</h2>
            <p>{item.overview}</p>
            <p>{item.release_date}</p>
           <div> <img src={`https://image.tmdb.org/t/p/w342${item.backdrop_path}`} alt = "poster"></img>
            <ul>Genres
                {item.genres.map((genre)=>{
                return(
                    <li key={genre.id}>{genre.name}</li>
                )
            })}</ul>
            </div>
        </main>
    )
}