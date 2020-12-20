import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aboutme from "./pages/aboutme";
import Projects from "./pages/projects"
import "./App.css";

function App() {
  return (
    <Router>
    <div >
      <Switch>
        <Route exact path={["/", "/aboutme"]}>
        <Aboutme/>
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  </Router>
    
  );
}


export default App;
