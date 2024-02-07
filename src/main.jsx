import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/pages/Home.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router} />
)
