import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//pages
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import AuthGuarding from './utils/AuthGuarding.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<div>Error</div>,
    children:[
      {
        path:'/',
        element:<HomePage />
      },
      {
        path:'/login',
        element:<LoginPage />
      },
      {
        path:'/products',
        element:<AuthGuarding>
          <ProductsPage />
        </AuthGuarding>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
