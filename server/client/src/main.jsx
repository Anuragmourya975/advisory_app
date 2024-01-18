import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./utils/ThemeContext";
import { ModalProvider } from "./contexts/ModalContext";
import App from "./App";
import "./index.css";

ReactDOM.render((
  <React.StrictMode>
    <Router>
      <ModalProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ModalProvider>
    </Router>
  </React.StrictMode>
), document.getElementById('root'))