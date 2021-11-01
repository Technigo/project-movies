import React from "react";
import "./MovieList.css"

const MovieList = ({ poster, title, date, rating }) => {
    // const [loading, setLoading] = useState(false)

    const moviePoster = `https://image.tmdb.org/t/p/w300${poster}`

    return (
        <div>
            <div>
                <img src={moviePoster} alt="movie-poster" />
            </div>
            <div>
                {title}
            </div>
            <div>
                Release date: {date}
            </div>
            <div>
                Movie rating: {rating}
            </div>
        </div>
    )
}

export default MovieList