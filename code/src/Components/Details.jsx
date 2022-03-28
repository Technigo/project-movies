import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Details = ({films}) => {
    const {id} = useParams()

    const movie = films.filter(movie => movie.id === Number(id))[0];

    console.log(movie)
    console.log(movie.title)
    

    return(
    <section>
    </section>
    )
}

export default Details