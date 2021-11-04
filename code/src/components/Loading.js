import React from "react";
import loadingimg from "images/Loading.mp4"

const Loading = () => {
	return (
    <div className="pageNotFoundContainer">


<div className="imgPageNotFound">

<video autoPlay loop muted src={loadingimg} alt={"loading video"} />
</div>

      <div className="textPageNotFound"> 
      <h2>Loading....</h2>
      </div>

    </div>
  );
};

export default Loading;
