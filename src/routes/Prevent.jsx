import { Navigate, Outlet } from "react-router-dom";
import { isTokenValid } from "@/utils/token";

const PreventRoute = () => {
  // Check for the presence of the authToken in localStorage
  const isAuthenticated = isTokenValid();

  // If authenticated, redirect to the home page, otherwise render the route
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default PreventRoute;
