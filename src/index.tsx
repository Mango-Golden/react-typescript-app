/**
 * @author mango
 * @description react app render
 */

import { createRoot } from "react-dom/client";
import { QueryClientProvider } from 'react-query';

import App from '@~/app';
import { container, client } from '@~/initial';

createRoot(container).render(
  <QueryClientProvider client={client}>
    <App/>
  </QueryClientProvider>
);
