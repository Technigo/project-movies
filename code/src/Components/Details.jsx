import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Details = ({films}) => {
    const {id} = useParams()
    const [film, setFilm] = useState({})

    // const thisFilm = () => {
    //     for (let i = 0; i<films.length; i++) {
    //         if (films[i].id === id) {
    //             setFilm(films[i])
    //         }
    //     }
    // }

    // thisFilm();

    let filter

    useEffect(() => {
        filterFilm();
        setFilm(filter)
    }, [])

    const filterFilm = () => {
        filter = films.filter(movie => movie.id === Number(id));
    }

    

    // console.log(films)

    // const filter = films.filter(movie => movie.id === Number(id))

    // console.log('this film', filter)

    console.log(film)

    

    // const movies = Object.entries(films)
    // console.log(movies, typeof movies)
    // console.log(movies)


    // console.log(films)
    // console.log(typeof films)
    // console.log(id)
    // console.log(typeof id)
    // console.log(films['0'])

    // console.log('this film', film)

    return(
    <>
        {/* {films.map((film => {
            return(
                <p key={film.id}>{film.id}</p>
            )
        }))} */}
    </>
    )
}

export default Details