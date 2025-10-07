import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./global.css";

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import App from './App';
import Login from './routes/Login';
import Error from './routes/Error';
import Cadastro from './routes/Cadastro';

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/> , children:[
    {path:"/",element:<Login/>},
    {path:"/cadastro",element:<Cadastro/>},
  ]}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)