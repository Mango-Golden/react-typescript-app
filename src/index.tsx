/**
 * @author mango
 * @description react app render
 */

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@~/app';
import { container } from '@~/initial';

createRoot(container).render(
  <BrowserRouter >
    <App/>
  </BrowserRouter>,
);
