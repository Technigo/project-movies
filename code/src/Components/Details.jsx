import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Details = ({films, loading}) => {
    const {id} = useParams()

    const movie = films.filter(movie => movie.id === Number(id))[0];

    console.log(movie)
    console.log(movie.title)
    

    return(
    <section>
    {loading && <LoadingSpinner />}
    </section>
    )
}

export default Details