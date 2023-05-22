import React from "react";
import { IsLoggedIn } from "../root";

function ClientDashboard() {
  return (
    <IsLoggedIn>
    <h1>Dashboard</h1>
    </IsLoggedIn>
   );
  }

export default ClientDashboard;
