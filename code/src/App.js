import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PopularOverview } from "components/PopularOverview";
import { MovieDetails } from "components/MovieDetails";
import { NotFound } from "components/NotFound";
import { TopRatedOverview } from "components/TopRatedOverview";
import { UpcomingOverview } from "components/UpcomingOverview";
import { NowPlayingOverview } from "components/NowPlayingOverview";

export const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <PopularOverview />} />
				<Route path="/top-rated" render={() => <TopRatedOverview />} />
				<Route path="/upcoming" render={() => <UpcomingOverview />} />
				<Route path="/now-playing" render={() => <NowPlayingOverview />} />
				<Route path="/movies/:id" render={() => <MovieDetails />} />
				<Route path="/404" component={NotFound} />
				<Redirect to="/404" />
			</Switch>
		</BrowserRouter>
	);
};

// export const App = () => {
// 	return (
// 		<BrowserRouter>
// 			<Switch>
// 				<Route exact path="/">
// 					<PopularOverview />
// 				</Route>
// 				<Route path="/top-rated">
// 					<TopRatedOverview />
// 				</Route>
// 				<Route path="/upcoming">
// 					<UpcomingOverview />
// 				</Route>
// 				<Route path="/now-playing">
// 					<NowPlayingOverview />
// 				</Route>
// 				<Route path="/movies/:id">
// 					<MovieDetails />
// 				</Route>
// 				<Route path="/404">
// 					<NotFound />
// 				</Route>
// 				<Redirect to="/404" />
// 			</Switch>
// 		</BrowserRouter>
// 	);
// };
