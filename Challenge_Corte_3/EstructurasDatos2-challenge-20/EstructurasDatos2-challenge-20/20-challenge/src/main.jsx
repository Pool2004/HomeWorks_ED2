import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './App';
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './utils/store'; // Import the Redux store
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap MainApp with Provider */}
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);