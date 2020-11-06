import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const NavBar = ({ chosenList, dropDownChosenMovieList }) => {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = (event) => {
    setMenuActive(event.currentTarget);
  };

  const handleClose = () => {
    setMenuActive(null);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Filter Movies
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={menuActive}
        keepMounted
        open={Boolean(menuActive)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => dropDownChosenMovieList("popular")}>
          Most popular movies
        </MenuItem>
        <MenuItem onClick={() => dropDownChosenMovieList("top_rated")}>
          {" "}
          Top rated movies
        </MenuItem>
        <MenuItem onClick={() => dropDownChosenMovieList("upcoming")}>
          Upcoming movies
        </MenuItem>
      </Menu>
    </div>
  );
};
