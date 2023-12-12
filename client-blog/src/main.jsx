import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './pages/Router';
import LoggedInProvider from './context/LoggedContext';
import UserProvider from './context/UserContext';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <UserProvider>
        <LoggedInProvider>
          <Router />
        </LoggedInProvider>
      </UserProvider>
    </React.StrictMode>,
)
