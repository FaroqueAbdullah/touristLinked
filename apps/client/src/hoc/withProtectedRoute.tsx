import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

// This function takes a component...
function withProtectedRoute(WrappedComponent: React.ComponentType) {
  // ...and returns another component...
  // eslint-disable-next-line react/display-name
  return (props: object) => {
    const { user } = useAuth();

    if (!user) {
      return <Navigate to="/auth/login" />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withProtectedRoute;
