import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

interface UnProtectedRouteProps {
  children:  React.ReactNode
}

export const UnProtectedRoute = ({ children } : UnProtectedRouteProps) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};