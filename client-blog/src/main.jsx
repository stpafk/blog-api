import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './pages/Router';
import LoggedInProvider from './context/LoggedContext';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <LoggedInProvider>
        <Router />
      </LoggedInProvider>
    </React.StrictMode>,
)
