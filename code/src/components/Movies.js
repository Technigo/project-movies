// import altText from 'eslint-plugin-jsx-a11y/lib/rules/alt-text';
import React from 'react'

const Movies = ({ apiData}) => {

    return(
        apiData && apiData.map((movieItem) => {
            // const { title, backdrop_path, release_date } = movieItem
            return (
                <div style={{backgroundColor: 'pink'}}>
                <img src={`https://image.tmdb.org/t/p/w500${movieItem.backdrop_path}`} alt="film poster"/>

            <p>{movieItem.title}</p>
            <p>Released {movieItem.release_date}</p>

            
            </div>
        )
        })
    )
}
export default Movies
// const Movies = ({ apiData }) => {
//     return(
//         apiData && apiData.map(movieItem => {
//             const { title, backdrop_path, release_date } = movieItem;
//             // const backdrop = 'https://image.tmdb.org/t/p/w1280'
//         return (
//             <div style={{backgroundColor: 'pink'}}>
//             <p>{title}</p>
//             <p>Released {release_date}</p>
//             <img src={_path} alt="movie cover"/> 
            
//             </div>
//         )
//         })
//     )
// }