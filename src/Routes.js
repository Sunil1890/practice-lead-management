import React from "react";
import { Route } from "react-router-dom";
// import Dashboard from "./pages/dashboard/components/DashboardSales";
import Dashboard from "./pages/dashboard/components/DashboardAdmin";
import LeadDetails from "./pages/leadDetails/components/LeadDetails";
import LeadManagement from "./pages/leadManagement/components/LeadManagement";

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
