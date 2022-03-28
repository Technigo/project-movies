import React, {useState, useEffect } from 'react'
import { MOVIELIST } from 'Urls.js/url'

const Popular = () => {
    const [list, setList] = useState([])
    
    

    useEffect(() => {
        fetch(MOVIELIST)
        .then((res) => res.json())
        .then((data) => {
            setList(data.results)
            
    
        })
    }, [])

    // console.log(data.results)
    return (
        <section className="movie-list">
            {list.map((movie) => {
            return <div key={movie.title}>
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
                </div>
            })}




        </section>
    )
}

export default Popular