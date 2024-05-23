import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { Config, DAppProvider } from "@usedapp/core";

const DAppConfig: Config = {
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <DAppProvider config={DAppConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </DAppProvider>
);
