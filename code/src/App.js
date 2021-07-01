import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Listing from "./pages/Listing";
import MovieDetails from "./pages/MovieDetails";
import Navigation from "./components/Navigation";

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Listing}></Route>
        <Route path='/:movieId' exact component={MovieDetails}></Route>
      </Switch>
    </Router>
  );
};
