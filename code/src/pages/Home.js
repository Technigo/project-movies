import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {About} from "./About"
import {AlbumList} from "./AlbumList"
import {Details} from "./Details"
import { TopList } from "./TopList"
import { Nav } from "./Nav"


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

            <Route path = "/movie-details/:id">
                <Details/>
            </Route>

            <Route path = "/top-list" exact>
                <TopList/>
            </Route>

            
           
                
        </Switch>
    </main>
 </BrowserRouter>
    )
}
