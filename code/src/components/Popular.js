import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { MOVIES_URL } from 'utils/urls'


const Popular = () => {

    const [movieList, setMovieList] = useState([])

    //moved fetch here since we want the fetch to happen only when this Route (/) opens and not for every visit on our website.

    useEffect(() => {
        fetch(MOVIES_URL)
            .then(res => res.json())
            .then(data => {
                setMovieList(data.results)
            })
    }, [])

    return (
        <Main>
            {movieList.map((movie => {
                return (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <FilmCard>
                            <FilmImageGroup>
                                <MovieDetails>
                                    <MovieCard src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                                    <ImageOverlay></ImageOverlay>
                                    <TextOverlay>
                                        <Filmtitle>{movie.title}</Filmtitle>
                                        <p>Released{movie.release_date}</p>
                                    </TextOverlay>
                                </MovieDetails>
                            </FilmImageGroup>
                        </FilmCard>
                    </Link>
                )
            }))}
        </Main>
    )
}

export default Popular

//styled components
const Main = styled.main`
display: grid;
grid-template-columns: 1fr;


@media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
}

@media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
`

const FilmCard = styled.div`
width: 100%;
height: 100%;
`

const MovieDetails = styled.div`
    text-decoration: none;
    color: white;
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 0.5s ease;
    background: transparent;
`

const TextOverlay = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
transition: 0.5s ease;
display: flex;
flex-direction: column;
justify-content: flex-end;
color: transparent;
padding: 20px;
`

const FilmImageGroup = styled.div`
position: relative;
display: flex;
width: 100%;
height: 100%;


&:hover ${ImageOverlay} {
    background: rgba(0, 0, 0, 0.7);
}

&:active ${ImageOverlay} {
    background: rgba(0, 0, 0, 0.7);
}

&:hover ${TextOverlay} {
color: white;
}

&:active ${TextOverlay} {
    color: white;
}
`

const MovieCard = styled.img`
width: 100%;
height: 100%;
object-fit: cover;`

const Filmtitle = styled.h2`
hyphens: auto;
word-wrap: break-word;
overflow-wrap: break-word;
-webkit-hyphens: auto;
-moz-hyphens: auto;
-ms-hyphens: auto;
`