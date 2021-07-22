import './App.css';
import Page1 from "./page1";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";import Page2 from "./page2";

function App() {
  return (
    <Router>
        <div>
            <li>
                <Link to="/read">Page1</Link>
            </li>
            <li>
                <Link to="/about">Page2</Link>
            </li>
            <Switch>
                <Route exact path="/read">
                    <Page1 />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </div>
    </Router>
  )
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

export default App;

