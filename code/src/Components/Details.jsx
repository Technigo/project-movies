import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Details = ({films, loading}) => {
    const {id} = useParams()

    const movie = films.filter(movie => movie.id === Number(id))[0];

    console.log(movie)
    console.log(typeof movie)

    console.log(movie.adult)
    

    return(
    <>
    {loading && <LoadingSpinner />}
    </>
    )
}

export default Details