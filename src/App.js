
import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/LoginPage";

import LangSelector from './language/LangSelector';
import { useTranslation } from 'react-i18next';


function App() {
  const {t}=useTranslation();
  return (
    <Router>
      <div className="App">
      
      <h3>{t('title')}</h3>
        <LangSelector/>
       
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route  path='/en' component={Login} />
              <Route path="/tr" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App;