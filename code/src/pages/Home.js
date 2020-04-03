import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {About} from "./About"
import {AlbumList} from "./AlbumList"
import {Details} from "./Details"
import { BestChoice } from "./BestChoice"
import { Nav } from "./Nav"
import {MostWatched} from "./MostWatched"

export const Home = () => {
    return (
        
<BrowserRouter>

<Nav/>
    <main>

        <Switch>
            <Route path = "/" exact>
                <AlbumList/>
            </Route>

            <Route path = "/about" exact>
                <About/>
            </Route>  

            <Route path = "/movie-details/:id" exact>
                <Details/>
            </Route>

            <Route path = "/best-choince" exact>
                <BestChoice/>
            </Route>

            <Route path = "/most-watched" exact>
                <MostWatched/>
            </Route>
            
           
                
        </Switch>
    </main>
 </BrowserRouter>
    )
}
