import React, { useEffect, useState } from 'react'


import Movies from 'components/Movies';

const API_KEY = process.env.REACT_APP_API_KEY

export const App = () => {
  const [apiData, setApiData] = useState('');

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.json())
    .then(data => {
      setApiData(data.results);
      console.log(data.results)
    })
  }, [])

console.log(apiData)

return (
  <main>
    <Movies apiData={apiData}/>
  </main>
)

  
}
