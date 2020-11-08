import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormHelperText } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-Between",
  },
  Button: {
    color: "#ffff",
    background: "#ffff",
  },
  title: {
    display: "flex",
    fontWeight: 800,
    marginRight: "30px",
    alignItems: "center",
  },
}));

export const NavBar = ({ chosenList, dropDownChosenMovieList }) => {
  const classes = useStyles();
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = (event) => {
    setMenuActive(event.currentTarget);
  };

  const handleClose = () => {
    setMenuActive(null);
  };
  return (
    <div className={classes.container}>
      <Button
        classesname={classes.Button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
        variant="contained"
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
      <div className={classes.title}>
        <span aria-aria-label="symbols">🥨🍿</span>
        Joel's Movie Site
        <span aria-aria-label="symbols">🍫🍿</span>
      </div>
    </div>
  );
};
