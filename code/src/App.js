import "./index.css";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from "./components/MovieList";
import { ContactUs } from "./components/ContactUs";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { NotFound } from "components/NotFound";

// I had created this component but did not write any code in it , just wanted to add it to simplify debugging
import { MovieDetails } from "./components/MovieDetails";

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
        <Route path="/movieDetails/:movieId">
          <MovieDetails />
        </Route>
        <Route path="/contactUs">
          <ContactUs />
        </Route>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
