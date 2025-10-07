import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Login from './Routers/Login'
import Cadastro from './Routers/Cadastro'
import Error from './Routers/Error'

import { AuthProvider } from './AuthContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Login /> },
      { path: 'cadastro', element: <Cadastro /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
