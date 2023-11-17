import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './redux/store/store.jsx';
import { Provider } from 'react-redux';
import AppRouter from './router/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
)
