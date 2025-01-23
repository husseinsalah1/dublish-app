import { Navigate, Outlet } from "react-router-dom";
import { isTokenValid } from "@/utils/token";

const ProtectedRoute = () => {
  // Check for authentication status
  const isAuthenticated = isTokenValid();

  // If authenticated, render the route; otherwise, redirect to the login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
