import React from "react";

const Selector = ({ setApiUrl, makeApiUrl }) => {
  // We make a number between 1 to 450 which later is concated in the url string
  const randomNumber = Math.floor(Math.random() * 450);

  return (
    <div>
      <div className="selector">
        <label className="top-label" htmlFor="selector">
          <div className="ask-a-question">
            <h1 className="question-text">Select a list</h1>
          </div>
        </label>
        <select
          className="input"
          id="selector"
          // We set the state property apiUrl to hold a api url as a string, and before we make the string
          // with a function that is declared in App.js
          onChange={(event) => setApiUrl(makeApiUrl(event.target.value))}
        >
          <option value="">Please select</option>
          <option value="https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1">
            Show Top Rated Movies
          </option>
          <option value="https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1">
            Show Popular films
          </option>
          <option value="https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1&region=SE">
            Now Playing in Sweden
          </option>
          <option value="https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1&region=ES">
            Now Playing in Spain
          </option>
          <option
            value={`https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=${randomNumber}`}
          >
            I like random
          </option>
        </select>
      </div>
    </div>
  );
};

export default Selector;
