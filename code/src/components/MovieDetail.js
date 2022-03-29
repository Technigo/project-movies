import React, { useEffect, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import NotFound from 'components/NotFound'



const MovieDetail = ( { movieList } ) => {

    const [movieDetail, setMovieDetail] = useState({});

    const { movieId } = useParams();
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=eb85018c9b0845f43bd288b4feca8a24&language=en-US`)
        .then(res => res.json())
        .then(data => {setMovieDetail(data)})
        .catch(error => console.log(error))
        
    },[])
    console.log(movieDetail)

    const matchID = movieList.find(item => item.id == movieId);

   
    if (!matchID) {
        return <Link to={'/'}>Go back</Link>
    } 


    return (
        
        <div className='movie-detail' 
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1)),
        url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`}}>

        <Link className='back-link' to={'/'}><span className="link-icon"><IoIosArrowBack /></span>Movies</Link>
            <div className='detail-container'>
                <img src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`}/>
                <div className='movie-detail-title'>
                    <h3>{movieDetail.original_title}</h3>
                    <span>{movieDetail.vote_average}/10</span>
                    <p>{movieDetail.overview}</p>
                </div>
            </div>

        </div>
    )
       
    }




export default MovieDetail;