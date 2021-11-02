import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "Navbar";
import Home from "Home";
import Toprated from "Toprated";
import MovieDetail from "components/MovieDetail";
import NoPageFound from "NoPageFound";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="navbarContainer">
          <Navbar />
        </div>
				<div className="contentContainer">
        <Switch>
          
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/toprated" exact>
              <Toprated />
            </Route>


						<Route path="/movies/:id" exact>
              <MovieDetail />
            </Route>

						<Route path="*" >
              <NoPageFound />
            </Route>

         

				
				

        </Switch>
				</div>
      </div>
    </BrowserRouter>
  );
};
