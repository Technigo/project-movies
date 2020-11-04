import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MovieList } from "components/MovieList";
import { MovieDetails } from "components/MovieDetails";

// api-key 995425e2e6cd0fcf599ff795098e1e8b

// import { MovieList } from "./MovieList";

// import { MovieDetails } from "./MovieDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movieId" exact>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

// return (
//   <BrowserRouter>
//     <Switch>
//       <Route path="/" exact>
//         <MovieList />
//       </Route>
//       <Route path="/movies/:slug" exact>
//         <MovieDetails />
//       </Route>
//     </Switch>
//   </BrowserRouter>
// );
