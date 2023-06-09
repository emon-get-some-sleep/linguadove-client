import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './routes/Routes.jsx';
// bg-gradient-to-br from-gradient-color-1 to-gradient-color-2
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='bg-gradient-to-br from-[#FFFFFF] to-[#EFF1FF]'>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </div>
  </React.StrictMode>,
)
