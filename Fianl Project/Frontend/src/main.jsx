import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './Router.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import { AuthProvider } from './context/auth.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  </AuthProvider>
  // </React.StrictMode>
)
