import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import { store } from "./redux/store";
import { SnackbarProvider } from "notistack";

console.log("hi");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={4} variant="success">
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
