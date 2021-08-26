import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <Router>
      <nav>
        <NavLink activeClassName="active" className="" to="/projects">
          Projects
        </NavLink>
        <NavLink activeClassName="active" className="" to="/about">
          About
        </NavLink>
      </nav>

      <main>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>

    </Router>
  );
}

export default App;
