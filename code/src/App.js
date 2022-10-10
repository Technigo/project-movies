import React from 'react';

export const App = () => {
fetch('https://api.themoviedb.org/3/movie/popular?api_key=f8eb3d0941c8cec7118b188a305910c5&language=en-US&page=1')
.then((data) => data.json())
.then((configuredData) => console.log(configuredData))
  return (
    <div>
      Find me in src/app.js!
    </div>
  );
}
