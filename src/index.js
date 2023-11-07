import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';

import css from './components/App.module.css';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <App className={css.Wrapper} />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
