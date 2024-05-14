import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import React Routes
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
// import react tost
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toltip
import 'react-tooltip/dist/react-tooltip.css'
// date
import "react-datepicker/dist/react-datepicker.css";



// tanstack query

import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'


const queryClient = new QueryClient()




 


 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <AuthProvider>

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>




    <ToastContainer />
  
    </AuthProvider>
 
  
  </React.StrictMode>,
)
