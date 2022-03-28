import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "Components/LoadingSpinner";
import FilmList from "Components/FilmList";
import Details from "Components/Details";

// Import URLS
import { POPULAR_API } from "utils/urls";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetchPopular();
    }, [])

    const fetchPopular = () => {
        fetch(POPULAR_API)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(true)
                // console.log(data.results)
                setPopular(data.results)
                setIsLoading(false)
            })
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                    <main>  
                    {isLoading && <LoadingSpinner />}
                    <FilmList films={popular} />
                    </main>
                }/>
                <Route 
                    path="/movies/:id" 
                    element={
                    <>
                    {isLoading && <LoadingSpinner />}
                    <Details films={popular} />
                    </>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Home