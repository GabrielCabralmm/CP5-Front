import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./global.css";

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<Error/> , children:[
    {path:"/",element:<Home/>}
  ]}
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)