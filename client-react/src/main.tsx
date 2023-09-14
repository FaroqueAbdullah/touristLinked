import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';
import Styles from './utils/globalstyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Styles />
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>
);
