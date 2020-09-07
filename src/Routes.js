import React from "react";
import { Route } from "react-router-dom";
import LeadManagement from "./pages/LeadManagement/components/LeadManagement";
// import Dashboard from "./pages/dashboard/components/DashboardSales";
import Dashboard from "./pages/dashboard/components/DashboardAdmin";
import LeadDetails from "./pages/LeadDetails/components/LeadDetails";

function Routes() {
  return (
    <div>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/home">
        <Dashboard />
      </Route>
      <Route path="/lead-management">
        <LeadManagement />
      </Route>
      <Route path="/lead-details">
        <LeadDetails />
      </Route>
    </div>
  );
}

export default Routes;
