import React, {useState, useEffect} from "react";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetchPopular();
    }, [])

    const API_KEY = 'f55bd4b71d7c57e409b2ec343ade0aee'
    const API_READ_ACCESS = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTViZDRiNzFkN2M1N2U0MDliMmVjMzQzYWRlMGFlZSIsInN1YiI6IjYyM2RiOTg5YTMxNDQwMDA0OGY0OWQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Z9GkLz6SCozWtlvvzK8hq0GFhLAex86Yf7GsqEiNL8'
    const POPULAR_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

    const fetchPopular = () => {
        fetch(POPULAR_API)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(true)
                console.log(data)
                setPopular(data.results)
                setIsLoading(false)
            })
    }


    return(
        <>
        <h1>Testing</h1>
        </>
    )
}

export default Home