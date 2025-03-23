import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'remixicon/fonts/remixicon.css';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// Correct way to attach global error handling in v5
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// Global error listener (v5-compatible)
queryClient.getQueryCache().subscribe((event) => {
  if (event?.type === 'error') {
    console.error('Error while fetching data:', event.error);
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
