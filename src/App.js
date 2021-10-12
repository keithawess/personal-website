import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Projects from "./components/projects/Projects";
import About from "./components/About";
import logo from "./shared/img/profile-pic-crop.jpg";

function App() {
  return (
    <Router>
      <header className="flex bg-black text-white flex-grow">
        <div className="circle border border-white logo margin-right mobile">
          <img className="logo mobile" src={logo} />
        </div>
        <div className="flex justify-space-evenly flex-grow stack flex-wrap">
          <div className="header-name margin-right header-text">Keith Wess</div>
          <div className="header-git header-text margin-right flex-grow text-end">
            <span className="mobile">Github:</span>{" "}
            <a
              className="text-plain text-white"
              target="_blank"
              href="https://github.com/keithawess"
            >
              github.com/keithawess
            </a>
          </div>
        </div>
      </header>

      <nav className="flex justify-space-evenly width-full bg-blue">
        <NavLink
          activeClassName="active"
          className="nav-half border-white border-right text-center text-plain text-white"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-half border-white text-center text-plain text-white"
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
