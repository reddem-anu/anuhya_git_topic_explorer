import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ClientProvider } from './graphql/client';

ReactDOM.render(
  <React.StrictMode>
    <ClientProvider>
      <App />
    </ClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
