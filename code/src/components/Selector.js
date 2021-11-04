import React from "react";

const Selector = ({ makeApiUrl }) => {
  return (
    <div>
      <div className="selector">
        <label className="top-label" htmlFor="selector">
          <div className="ask-a-question">
            <h1 className="question-text">Select the list you want</h1>
          </div>
        </label>
        <select
          className="input"
          id="selector"
          onChange={(event) => makeApiUrl()}
        >
          <option value="">Please select</option>
          <option value="https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1">
            Get Popular
          </option>
          <option value="https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1">
            Upcoming
          </option>
        </select>
      </div>
    </div>
  );
};

export default Selector;
