import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, ForgotPassword, ResetPassword } from "./modules/PublicArea";
import Dashboard from "./modules/PrivateArea/Dashboard/Dashboard";
import AccountManagement from "./modules/PrivateArea/AccountManagement/AccountManagement";
import PrivateRoute from "./Routes/PrivateRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/" exact component={Login} />

          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute
            path="/account-management"
            exact
            component={AccountManagement}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
