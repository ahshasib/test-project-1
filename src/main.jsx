import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Reg from './pages/Reg';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './Route/PrivetRoute';
import Order from './pages/Order';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/registration",
    element: <Reg></Reg>
  },
  {
    path: "/order",
    element: <PrivetRoute><Order></Order></PrivetRoute>
  },
  

]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </AuthProvider>
)
