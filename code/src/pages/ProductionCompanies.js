// import React, { useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom'

// const ProductionCompanies = () => {
//   const [companies, setCompanies] = useState([]);
//   const { movieId } = useParams();

//   useEffect(() => (
//     fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json, "json")
//       setCompanies(json.production_companies)
//     })
//   ), [movieId]);

//   return (
//     <div>
//       {companies.map((company) => (
//         <div>
//           <p>{company.name}</p>
//           <img src="" alt={company.name} />
//         </div>
//       ))}
//     </div>
//     );
// };
 
// export default ProductionCompanies;

