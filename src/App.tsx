import React, { useState, useCallback } from "react";
import { AuthContext } from "./components/context/auth-context";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Authenticate from "./pages/Authenticate";
import "./App.css";
import MainNavigation from "./components/Navigation/MainNavigation";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/login" exact>
            <Authenticate />
          </Route>
          <Route path="/signup" exact>
            <Authenticate />
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
