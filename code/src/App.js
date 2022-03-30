import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { API_KEY } from 'Apis/Urls';

import Movies from 'components/Movies';
import Moviedetail from 'components/Moviedetail';
import Errorpage from 'components/Errorpage';

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

  
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Movies apiData={apiData}/>} />
          <Route path="/movie/:movieId" element={<Moviedetail />} />

          <Route path="*" element={<Errorpage />} />          
        </Routes>
      </Router>
    </main>
)
  
}
