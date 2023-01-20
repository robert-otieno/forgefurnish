import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App'
import { Category, Product, Products } from './pages'
import './index.css'
import ErrorPage from './error-page'
import { ContextProvider } from './contexts/ContextProvider'

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:product", element: <Product /> },
  { path: "/product-category/:category", element: <Category /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
