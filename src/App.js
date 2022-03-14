import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Login,
  ForgotPassword,
  ResetPassword,
} from "./modules/PublicArea";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
