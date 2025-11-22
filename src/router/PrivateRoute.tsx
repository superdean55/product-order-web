import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth.store"; 
import { ROUTE_PATHS } from "./routes";
import { UnauthorizedPage } from "../pages/UnauthorizedPage";

interface PrivateRouteProps {
  allowedRoles?: string[]; 
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const { token, user } = useAuthStore((state) => ({
    token: state.token,
    user: state.user,
  }));

  if (!token) return <Navigate to={ROUTE_PATHS.LOGIN} replace />;

  if (allowedRoles && user && !allowedRoles.includes(user.role))
    return <UnauthorizedPage />;

  return <Outlet />;
};
