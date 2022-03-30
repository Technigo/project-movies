import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "Components/LoadingSpinner";
import FilmList from "Components/FilmList";
import Details from "Components/Details";
import Error from "Components/Error";

// Import URLS
import { URLS } from "utils/urls";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [popular, setPopular] = useState([])

    useEffect(() => {
        console.log('mounted')
        const fetchMovies = async () => {
            setIsLoading(true)
            const [result1, result2] = await Promise.all(
                URLS.map((url) => fetch(url)
                .then((res) => res.json())
            ));
            setIsLoading(false)
            setPopular(results => [...result1.results, ...result2.results])
        }

        fetchMovies();
    }, [])

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                    <>
                    {isLoading && <LoadingSpinner />}
                    {!isLoading && <FilmList films={popular} />}
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
                <Route
                    path="*"
                    element={<Error/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Home