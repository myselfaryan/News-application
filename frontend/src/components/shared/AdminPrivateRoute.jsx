import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Example: Checks if user is admin, otherwise redirects
const AdminPrivateRoute = ({ isAdmin }) => {
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AdminPrivateRoute;
