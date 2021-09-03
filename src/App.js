
import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/LoginPage";
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>{t}</Link>
                </li>
                <li className="nav-item">  
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App;