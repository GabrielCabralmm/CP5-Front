import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./global.css";

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import App from './App';
import Login from './Routers/Login';
import Error from './Routers/Error';
import Cadastro from './Routers/Cadastro';

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/> , children:[
    {path:"/",element:<Login/>},
    {path:"/",element:<Cadastro/>},
  ]}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)