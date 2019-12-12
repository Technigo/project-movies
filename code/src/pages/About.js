// import React, { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import "pages/moviedetails.css"


// export const CastDetails = () => {
//   const { id } = useParams()
//   const [cast, setCast] = useState([])

//   const api_key = "363444609247127238629594b245e069"

//   //https://api.themoviedb.org/3/movie/425/credits?api_key=363444609247127238629594b245e069
//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json) //varför con.loggar den bara på homepage?
//         setCast(json)
//       })
//   }, [id])


//   return (
//     <section className="movie-details">
//       <div className="genre">
//         {cast.cast.map((name) => (
//           <p key={name.name}>{name.name}</p>
//         ))}
//       </div>
//     </section >

//   )
// }
