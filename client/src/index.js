import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { AuthProvider } from "./store/auth";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <AppProvider>
      <AuthProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
      </AuthProvider>
    </AppProvider>
    <ToastContainer />
  </AuthProvider>
);

reportWebVitals();
