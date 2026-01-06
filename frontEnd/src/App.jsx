import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing'
import Products from './components/Products'
import UserCheckout from './components/UserCheckOut'
import Orders from './components/Orders'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "/products",
      element: <Products />
    },
    {
      path:"/checkout",
      element:<UserCheckout />
    },
    {
      path:"/orders",
      element:<Orders/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
