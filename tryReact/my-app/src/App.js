import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom"; 
import Page2 from "./page2";
import HomePage from './pages/homePage';
import ShowMenu from './pages/showMenu';
import MenuInfo from './pages/menuInfo';
import ShowCart from './pages/showCart';
import UpdateMenu from './pages/updateMenu';
import CreateMenu from './pages/createMenu'
import ShowOrder from './pages/showOrder'
import React, { Component }  from 'react';
import TestAxios from './pages/testAxios';


function App() {
    return (
        // <TestAxios></TestAxios>
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/homepage">
                    <HomePage />
                </Route>
                <Route exact path="/showMenu/:page">
                    <ShowMenu />
                </Route>
                <Route exact path="/menuInfo/:id" >
                    <MenuInfo />
                </Route>
                <Route exact path="/showCart">
                    <ShowCart />
                </Route>
                <Route exact path="/createMenu">
                    <CreateMenu />
                </Route>
                <Route exact path="/showOrder">
                    <ShowOrder />
                </Route>
                <Route exact path="/updateMenu/:id">
                    <UpdateMenu />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;

