import React from "react";
import { Link } from "react-router-dom";

// import Details from './Details';
// const API_KEY = '3bf2860c1d44881bc87143482ddf0f94';

// const API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;


// const baseURL = "https://image.tmdb.org/t/p/";
// const posterSize = "original";

export const PopularList = ({movies, imgSize, baseURL}) => {
    // const [movies, setMovies] = useState([])

    // useEffect(() => {
    //     fetch(API)
    //         .then((res) => res.json())
    //         .then((json) => setMovies(json.results));
    // }, []);

    console.log(movies)
    return (
        <div className='movie-list-container'>
            {movies.map((movie) => (
                <div key={movie.id} className='movie'>    
                    <Link
                        to={`/movies/${movie.id}`}
                    >
                        <img className='poster-img' src={`${baseURL}${imgSize}${movie.poster_path}`} alt={movie.orginal_title} />
                        <div className="overlay">
                            <div className="overlay-text">
                                <h2>{movie.original_title}</h2>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>    
                    </Link>
                </div>
            ))}
        </div>
    )
}
