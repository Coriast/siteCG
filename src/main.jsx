import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
