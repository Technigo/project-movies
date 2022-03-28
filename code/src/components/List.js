import React from "react"

const List = ({movies}) => {
    return (
        <section>
            {movies.map((movie => {
             return   <div key={movie.original_title}>{movie.original_title}</div>
            }))}
        </section>
    )
}

export default List