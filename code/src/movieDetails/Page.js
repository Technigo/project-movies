import React from 'react'


export const Page = ({item}) => {

    return (
        <main>
             <img src={`https://image.tmdb.org/t/p/w342${item.backdrop_path}`} alt = "poster"></img>
            <h2>{item.title}</h2>
            <p>{item.overview}</p>
            <p>{item.release_date}</p>
            <ul>Genres
                {item.genres.map((genre)=>{
                return(
                    <li key={genre.id}>{genre.name}</li>
                )
            })}</ul>
        </main>
    )
}