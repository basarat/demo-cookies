import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import App from './App';

hydrate(
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
