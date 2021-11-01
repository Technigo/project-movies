import "./index.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { MovieDetails } from "./components/MovieDetails";
import { ContactUs } from "./components/ContactUs";
import { Header } from "./components/Header";
import { NavBar } from "./NavBar";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar>
        <Header />
      </NavBar>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movieDetails">
          <MovieDetails />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
