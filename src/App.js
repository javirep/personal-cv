import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom"

import BasicInfo from "./components/BasicInfo"
import Projects from "./components/Projects"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import Studies from "./components/Studies"
import Experience from "./components/Experience"
import image from "./user-image.jpg"

function App() {
  return (
    <>
      <header>
        <h1>"The journey of a thousand miles begins with one step"</h1>
      </header>
      <main>
        <div className="basic-info-div">
          <img src={image} alt="user-image" />
          <BasicInfo />
        </div>
        <BrowserRouter>
          <div className="displayer">
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/studies" component={Studies} />
            </Switch>
          </div>

        </BrowserRouter>

      </main>
    </>
  );
}

export default App;
