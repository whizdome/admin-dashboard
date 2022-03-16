import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, ForgotPassword, ResetPassword } from "./modules/PublicArea";
import Dashboard from "./modules/PrivateArea/Dashboard/Dashboard";
import PrivateRoute from "./Routes/PrivateRoute";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
