import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/pages/Home.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router}>
    <App/>
  </RouterProvider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
