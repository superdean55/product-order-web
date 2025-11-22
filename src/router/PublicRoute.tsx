import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store'; // Prilagodite putanju
import { ROUTE_PATHS } from './routes'; 

interface PublicRouteProps {
  children?: React.ReactNode; 
}
export const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const token = useAuthStore((state) => state.token);

  if (token) {
    return <Navigate to={ROUTE_PATHS.HOME} replace />;
  }
  return children ? <>{children}</> : <Outlet />;
};