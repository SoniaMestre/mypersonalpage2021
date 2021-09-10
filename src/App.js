import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavBar} from "./components/navbar/NabBar";
import {Footer} from "./components/footer/Footer";
import {Home} from "./components/home/Home";
import {About} from "./components/about/About";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Sokjo} from "./components/Sokjo/Sokjo";
import {Blog} from "./components/blog/Blog";
import {LittlePress} from "./components/littlepress/LittlePress";
import {Mapit} from "./components/mapit/Mapit";


export function App() {
  return (
      <Router>
        <NavBar/>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/about">
                <About />
                </Route>
              <Route path="/skills">
                  <Skills />
              </Route>
              <Route path="/projects">
                  <Projects />
              </Route>
              <Route path="/sokjo">
                  <Sokjo />
              </Route>
              <Route path="/blog">
                  <Blog />
              </Route>
              <Route path="/littlepress">
                  <LittlePress />
              </Route>
              <Route path="/mapit">
                  <Mapit />
              </Route>
          </Switch>
          <Footer/>
      </Router>
  );
}

