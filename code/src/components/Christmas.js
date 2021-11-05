import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { CHRISTMAS_URL} from 'utils/urls';
import MovieBox from './MovieBox';


const ChristmasList = () => {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch(CHRISTMAS_URL)
        .then(res => res.json())
        .then((json) => setMovies(json.results))
        .finally(setLoader(false));
    }, []);


return (
    <section className="movies">
        {loader && <Loader />}
        {movies.map((movie) => (
            <MovieBox key={movie.id} movie={movie}/>
        ))}
    </section>
    ); 
};

export default ChristmasList;