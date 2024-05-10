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


 


 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
  
    </AuthProvider>
  
  </React.StrictMode>,
)
