import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login/Login";
import LeadManagement from "./pages/LeadManagement/LeadManagement";

function Routes() {
  return (
    <div>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route  path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <Dashboard />
      </Route>
      <Route path="/lead-management">
        <LeadManagement />
      </Route>
    </div>
  );
}

export default Routes;
