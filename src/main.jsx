import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import Authntication from './Authntication/Authntication'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authntication>
      <RouterProvider router={router}>
      </RouterProvider>
    </Authntication>
  </React.StrictMode>,
)
