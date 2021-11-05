import React from "react";
import { useHistory } from "react-router-dom";

import Footer from "./Footer";

const HomePage = ({ userApiKey, setUserApiKey }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/all-movies");
  };

  const handleInputChange = (e) => {
    setUserApiKey(e.target.value);
  };

  return (
    <>
      <div className="showcase">
        <div className="codeflix">
          <h1>CODEFLIX</h1>
        </div>
        <div className="showcase-content">
          <h1>Log-in Anywhere.</h1>
          <form className="submit-form" onSubmit={handleSubmit}>
            <label>
              <input
                className="api-input"
                type="text"
                placeholder="Your API key"
                name="api-key"
                value={userApiKey}
                onChange={handleInputChange}
              ></input>
            </label>
            <button className="btn btn-submit" type="submit">
              Go
            </button>
          </form>
          <a
            href="https://www.themoviedb.org/signup"
            className="btn btn-sign-up"
          >
            SIGN UP FOR YOUR API ACCOUNT
            <i className="fas fa-chevron-right btn-icon"></i>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
