import React from 'react'
// import 'react-tooltip/dist/react-tooltip.css'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import router from './routes/Routes'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import AuthProvider from './components/providers/AuthProvider'
// import AuthProvider from './providers/AuthProvider'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={Routes}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
