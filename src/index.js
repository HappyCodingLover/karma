import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
} from "react-router-dom";
// import App from './App';
import router from './routers'
import reportWebVitals from './reportWebVitals';
import './index.css';

import { WagmiConfig } from 'wagmi'
import { config } from './wagmi'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <WagmiConfig config={config}>
      <RouterProvider router={router} />
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
