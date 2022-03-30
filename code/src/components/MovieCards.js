import React from 'react';

const MovieCards = ({leias}) => {
    return (
        <section className="move-cards">
            {leias.map((leia) => (
                <div className="image-overlay" key={leia.title}>
                    <h3
                        className="movie-title">
                        {leia.title}
                    </h3>
                    <img 
                        className="movie-poster"
                        src={`https://image.tmdb.org/t/p/w300${leia.poster_path}`}
                        alt={leia.title}
                    />
                </div>
            ))}
        </section>      
    )
}

export default MovieCards;
