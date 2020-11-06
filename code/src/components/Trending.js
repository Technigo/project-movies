import React, { useEffect, useState } from 'react';
import { API_KEY } from './key';

export const Trending = () => {
    const TRENDING = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
    const [trending, setTrending ] = useState([])

    useEffect(() => {
        fetch(TRENDING)
        .then((response) > response.json())
        .then((json) => setTrending(json.results));
    }, [TRENDING]);


    useEffect(() => {
        setLoading(false)
    }, []);
        
    return ( 
        <section className="trending">

        </section>
    );
};