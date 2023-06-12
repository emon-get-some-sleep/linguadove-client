import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './routes/Routes.jsx';
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import AuthProviders from './providers/AuthProviders.jsx';
// bg-gradient-to-br from-gradient-color-1 to-gradient-color-2
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='bg-gradient-to-br from-[#FFFFFF] to-[#EFF1FF]'>
      <AuthProviders>
      <QueryClientProvider client={queryClient}>
      <div className='max-w-screen-xl mx-auto overflow-hidden'>
          <RouterProvider router={router} />
        </div>
      
      </QueryClientProvider>
      </AuthProviders>
        
      </div>
  </React.StrictMode>,
)
