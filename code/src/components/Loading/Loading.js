import React from "react";
import "./Loading.css";
import Header from "components/Header";

const Loading = () => {
  return (
    <>
      <div className="loading-overlay">
        <Header />
        <div className="loading-spinner" />

        <h2 className="loading-text">Loading...</h2>
      </div>
    </>
  );
};

export default Loading;
