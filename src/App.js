import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <Router>
      <header className="flex bg-black text-white">
        <div className="circle border border-white logo margin-right">&nbsp;</div>
        <div className="header-name">Keith Wess</div>
        
      </header>

      <nav className="flex justify-space-evenly width-full bg-blue">
        <NavLink
          activeClassName="active"
          className="flex-half border-white border-right text-center text-plain text-white"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          activeClassName="active"
          className="flex-half border-white text-center text-plain text-white"
          to="/about"
        >
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
          <Route path="*">
            <Redirect to="/projects" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
