import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingSpinner from "Components/LoadingSpinner";
import FilmList from "Components/FilmList";
import Details from "Components/Details";

// Import URLS
import { POPULAR_API_1 } from "utils/urls";
// import { POPULAR_API_2 } from "utils/urls";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetchPopularOne();
    }, [])

    const fetchPopularOne = () => {
        fetch(POPULAR_API_1)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(true)
                // console.log(data.results)
                setPopular(data.results)
                setIsLoading(false)
            })
    }

    // const fetchPopularTwo = () => {
    //     fetch(POPULAR_API_2)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setIsLoading(true)
    //             // console.log(data.results)
    //             setPopular(data.results)
    //             setIsLoading(false)
    //         })
    // }

    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={
                    <>
                    {isLoading && <LoadingSpinner />}
                    <main>
                    <FilmList films={popular} />
                    </main>
                    </>
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