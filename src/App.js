import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import React from "react"

// styles
import './App.css';

// pages
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

// hooks
import { useAuthContext } from "./hooks/useAuthContext";


function App() {

  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {!user && <Redirect to="/login" />}
            {user && <Home />}
          </Route>
          <Route path="/login">
            {!user && <Login />}
            {user && <Redirect to="/" />}
          </Route>
          <Route path="/signup">
            {!user && <Signup />}
            {user && <Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
