import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children:  React.ReactNode
}

export const ProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const { user } = useAuth();
  console.log("useruser ",user)
  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};