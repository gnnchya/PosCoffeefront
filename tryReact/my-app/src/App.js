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
import CreateMenu from './pages/createMenu'
import React, { Component }  from 'react';
import TestAxios from './pages/testAxios';


function App() {
    return (
        <TestAxios></TestAxios>
        // <Router>
        //     <Switch>
        //         <Route exact path="/">
        //             <HomePage />
        //         </Route>
        //         <Route exact path="/homepage">
        //             <HomePage />
        //         </Route>
        //         <Route exact path="/showMenu">
        //             <ShowMenu />
        //         </Route>
        //         <Route exact path="/menuInfo">
        //             <MenuInfo />
        //         </Route>
        //         <Route exact path="/showCart">
        //             <ShowCart />
        //         </Route>
        //         <Route exact path="/createMenu">
        //             <CreateMenu />
        //         </Route>
        //     </Switch>
        // </Router>
    )
}

export default App;

