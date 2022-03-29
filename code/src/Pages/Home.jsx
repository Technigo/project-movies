import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "Components/LoadingSpinner";
import FilmList from "Components/FilmList";
import Details from "Components/Details";

// Import URLS
import { POPULAR_API_1 } from "utils/urls";
import { POPULAR_API_2 } from "utils/urls";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetchMovies();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const urls = [
        POPULAR_API_1, POPULAR_API_2,
    ];

    const fetchMovies = async () => {
        setIsLoading(true)
        const [result1, result2] = await Promise.all(
            urls.map((url) => fetch(url)
            .then((res) => res.json())
        ));
        setIsLoading(false)
        setPopular(results => [...result1.results, ...result2.results])
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                    <>
                    {isLoading && <LoadingSpinner />}
                    {!isLoading && 
                        <main>
                        <FilmList films={popular} />
                        </main>
                    }
                    </>
                }/>
                <Route 
                    path="/movies/:id" 
                    element={
                    <>
                    {isLoading && <LoadingSpinner />}
                    {!isLoading && <Details films={popular} />}
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Home