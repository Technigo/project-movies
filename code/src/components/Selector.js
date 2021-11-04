import React from "react";

const Selector = ({ setApiUrl, makeApiUrl }) => {
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
          <option value="https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=458">
            Not so popular movies
          </option>
        </select>
      </div>
    </div>
  );
};

export default Selector;
