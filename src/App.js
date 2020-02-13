import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import EsqueciSenha from "./pages/EsqueciSenha";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/esqueci-senha">
          <EsqueciSenha />
        </Route>
        <Route path="/cadastro">
          <Cadastro />  
        </Route>  
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
