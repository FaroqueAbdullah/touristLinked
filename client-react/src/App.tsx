import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes'


function App(): React.ReactElement {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;