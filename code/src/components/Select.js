import React from "react";
import { SelectStyle } from "./SelectStyle";

export const Select = ({ change, changeTracker }) => {
  return (
    <form className="select-bar">
      <SelectStyle value={change} onChange={(e) => changeTracker(e.target.value)}>
        <option value={"popular"}>popular movies</option>
        <option value={"toprated"}>top rated</option>
        <option value={"upcoming"}>upcoming releases</option>
      </SelectStyle>
    </form>
  );
};
