import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Default } from './layouts/Default';
import './assets/css/plugins.css'
import './assets/css/style.css'
import './assets/css/colors/navy.css'
import { Login, Register, AfterRegister, ActivateAccount, PasswordReset, AfterPasswordReset, PasswordResetConfirm } from './pages/auth'
import { DetalleLibro, ListaLibros } from './pages/libros';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/libros',
        element: <ListaLibros />
      },
      {
        path: '/libros/:id',
        element: <DetalleLibro />
      },
    ],
  },
  {
    path: '/iniciar-sesion',
    element: <Login />
  },
  {
    path: '/registro',
    element: <Register />
  },
  {
    path: '/registro/confirmar',
    element: <AfterRegister />
  },
  {
    path: '/verificar-cuenta/:uid/:token',
    element: <ActivateAccount />
  },
  {
    path: '/restablecer-contraseña',
    element: <PasswordReset />
  },
  {
    path: '/restablecer-contraseña/confirmar',
    element: <AfterPasswordReset />
  },
  {
    path: '/restablecer-contraseña/confirmar/:uid/:token',
    element: <PasswordResetConfirm />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
