import React from "react";

export const LastEpisodeDetails = ({ overview, name }) => {
  return (
    <div>
      <h2 className="detail_info_textbox__subheader">Last episode: {name}</h2>
      <p className="detail_info_textbox__text">{overview}</p>
    </div>
  );
};
