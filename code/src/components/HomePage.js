import React from "react";
import { useHistory } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <label>
        Enter Key
        <input
          type="text"
          placeholder="Your API key here"
          name="api-key"
          value={userApiKey}
          onChange={handleInputChange}
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HomePage;
