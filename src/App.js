import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, ForgotPassword, ResetPassword } from "./modules/PublicArea";
import Dashboard from "./modules/PrivateArea/Dashboard/Dashboard";
import AccountManagement from "./modules/PrivateArea/AccountManagement/AccountManagement";
import AccountManagementProfile from "./modules/PrivateArea/Profile/MainProfile";
import PrivateRoute from "./Routes/PrivateRoute";

import { ToastContainer } from "react-toastify";

import "./App.css";
import ResourceManagement from "./modules/PrivateArea/ResourceManagement";
import GuestPageEdit from "./modules/PrivateArea/GuestPageEdit";
import HelpTipsView from "./modules/PrivateArea/ResourceManagement/Helptips";
import BlogSingle from "./modules/PrivateArea/ResourceManagement/BlogSingle";

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
            path="/resource-management"
            exact
            component={ResourceManagement}
          />
          <PrivateRoute
            path="/resource-management/help-tip/:id"
            exact
            component={HelpTipsView}
          />
          <PrivateRoute
            path="/resource-management/blogs/:id"
            exact
            component={BlogSingle}
          />

          <PrivateRoute
            path="/resource-management/guest-page-edit/:pageName"
            exact
            component={GuestPageEdit}
          />
          <PrivateRoute
            exact
            path="/account-management"
            component={AccountManagement}
          />
          <PrivateRoute
            path="/account-management/profile/:id"
            component={AccountManagementProfile}
          />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
