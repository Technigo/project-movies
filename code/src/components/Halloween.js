import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { HALLOWEEN_URL } from 'utils/urls';
import MovieBox from './MovieBox';



const HalloweenList = () => {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        fetch(HALLOWEEN_URL)
            .then(res => res.json())
            .then((json) => setMovies(json.results))
            .finally(setLoader(false));
    }, []);


    return (
        <section className="movies">
            {loader && <Loader />}
            {movies.map((movie) => (
                <MovieBox key={movie.id} movie={movie} />

            ))}
        </section>
    );
};

export default HalloweenList;